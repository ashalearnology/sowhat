import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.ts";
import { ApiError } from "../utils/ApiError.ts";
import Product from "../models/product.model.ts";
import { ApiResponse } from "../utils/ApiResponse.ts";
import Category from "../models/category.model.ts";

export const addProduct = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { name, description, sizes, mrp, price, isFeatured, onSale, category } = req.body;

    if ([name, description, sizes, mrp, price, category].some((field) => !field)) {
        throw new ApiError(400, "All fields are required.");
    }

    // TODO: Save image
    

    const existingCategory = await Category.findOne({ _id: category }, { _id: 1 }).lean();

    if (!existingCategory) {
        throw new ApiError(404, "Category not found.");
    }

    const customSlug = name.toLowerCase().replace(/ /g, "-") + "-" + Date.now();

    const product = await Product.create({
        name,
        slug: customSlug,
        description,
        category,
        sizes: sizes.map((size: { size: string; stock: number }) => ({ size: size.size, stock: size.stock })),
        mrp,
        price,
        isFeatured,
        onSale
    });

    res.status(201).json(
        new ApiResponse(
            201,
            product,
            "Product created successfully."
        )
    );
});

export const addMultipleProducts = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const products = req.body;

    if (!products || !Array.isArray(products) || products.length === 0) {
        throw new ApiError(400, "No products provided.");
    }

    const createdProducts = [];

    for (const product of products) {
        if ([product.name, product.description, product.sizes, product.mrp, product.price, product.category].some((field) => !field)) {
            throw new ApiError(400, "All fields are required.");
        }

        // TODO: Save image

        const existingCategory = await Category.findOne({ _id: product.category }, { _id: 1 }).lean();

        if (!existingCategory) {
            throw new ApiError(404, "Category not found.");
        }

        const customSlug = product.name.toLowerCase().replace(/ /g, "-") + "-" + Date.now();

        const newProduct = await Product.create({
            name: product.name,
            slug: customSlug,
            description: product.description,
            category: product.category,
            sizes: product.sizes.map((size: { size: string; stock: number }) => ({ size: size.size, stock: size.stock })),
            mrp: product.mrp,
            price: product.price,
            isFeatured: product.isFeatured,
            onSale: product.onSale
        })

        if (!newProduct) {
            throw new ApiError(500, "Failed to create product.");
        }

        createdProducts.push(newProduct);
    }

    res.status(201).json(
        new ApiResponse(
            201,
            createdProducts,
            "Products created successfully."
        )
    )
});

export const getProducts = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (Number(page) - 1) * Number(limit);

    const products = await Product.find().skip(skip).limit(limit).populate("category", "name slug").lean();

    if (products.length === 0) {
        throw new ApiError(404, "No products found.");
    }

    const totalProducts = await Product.countDocuments();

    res.status(200).json(
        new ApiResponse(
            200,
            {
                products,
                pagination: {
                    page,
                    limit,
                    total: totalProducts,
                    pages: Math.ceil(totalProducts / limit),
                    prev: page > 1 ? page - 1 : null,
                    next: page < Math.ceil(totalProducts / limit) ? page + 1 : null
                }
            },
            "Products fetched successfully."
        )
    );
});

export const getProductById = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const product = await Product.findById(req.params.id).lean();

    if (!product) {
        throw new ApiError(404, "Product not found.");
    }

    res.status(200).json(
        new ApiResponse(
            200,
            product,
            "Product fetched successfully."
        )
    );
});

export const updateProduct = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { name, description, sizes, mrp, price, isFeatured, onSale } = req.body;

    const existingProduct = await Product.findById(req.params.id).lean();

    if (!existingProduct) {
        throw new ApiError(404, "Product not found.");
    }

    const updatedSlug = name.toLowerCase().replace(/ /g, "-") + "-" + Date.now();

    const updatedSizes = [...existingProduct.sizes];

    sizes.forEach((newSize: { size: string; stock: number }) => {
        const existingSizeIndex = updatedSizes.findIndex(size => size.size === newSize.size);

        if (existingSizeIndex !== -1) {
            updatedSizes[existingSizeIndex].stock += newSize.stock;
        } else {
            updatedSizes.push(newSize);
        }
    });

    const product = await Product.findByIdAndUpdate(req.params.id, {
        name,
        slug: updatedSlug,
        description,
        sizes: updatedSizes,
        mrp,
        price,
        isFeatured,
        onSale
    }, { new: true });

    if (!product) {
        throw new ApiError(404, "Product not found.");
    }

    res.status(200).json(
        new ApiResponse(
            200,
            product,
            "Product updated successfully."
        )
    );
});

export const deleteProduct = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
        throw new ApiError(404, "Product not found.");
    }

    res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Product deleted successfully."
        )
    );
});

export const getFeaturedProducts = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const products = await Product.find({ isFeatured: true }).populate("category", "name slug").lean();

    if (products.length === 0) {
        throw new ApiError(404, "No featured products found.");
    }

    res.status(200).json(
        new ApiResponse(
            200,
            products,
            "Featured products fetched successfully."
        )
    );
});

export const getOnSaleProducts = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const onSaleProducts = await Product.find({ onSale: true }).populate("category", "name, slug").lean();

    if (!onSaleProducts || onSaleProducts.length === 0) {
        throw new ApiError(404, "No on sale products found.");
    }

    res.status(200).json(
        new ApiResponse(
            200,
            onSaleProducts,
            "On sale products fetched successfully."
        )
    );
});

export const getProductsByCategory = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { id: categoryId } = req.params;

    if (!categoryId) {
        throw new ApiError(400, "Category is required")
    }

    const products = await Product.find({ category: categoryId }).populate("category", "name slug").lean();

    if (!products || products.length === 0) {
        throw new ApiError(404, "No products found")
    }

    res.status(200).json(
        new ApiResponse(
            200,
            products,
            "Products fetched successfully."
        )
    )
});

export const searchProducts = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { query } = req.query;

    if (!query) {
        throw new ApiError(400, "Search query is required");
    }

    const products = await Product.find({
        $or: [
            { name: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } }
        ]
    }).populate("category", "name slug").lean();

    if (!products || products.length === 0) {
        throw new ApiError(404, "No products found");
    }

    res.status(200).json(
        new ApiResponse(
            200,
            products,
            "Products fetched successfully."
        )
    );
})