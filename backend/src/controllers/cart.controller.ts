import mongoose from "mongoose";
import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.ts";
import { ApiError } from "../utils/ApiError.ts";
import Product, { IProduct } from "../models/product.model.ts";
import Cart, { ICartDocument, ICartItemDocument } from "../models/cart.model.ts";
import { ApiResponse } from "../utils/ApiResponse.ts";
import { TAX_RATE } from "../constants.ts";

export const addToCart = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { productId, quantity } = req.body;
    const userId = req?.user?._id;

    if (!productId || !quantity) {
        throw new ApiError(400, "Product ID and quantity are required.");
    }

    const product = await Product.findById(productId).lean();
    if (!product) {
        throw new ApiError(404, "Product not found.");
    }

    let cart = await Cart.findOne({ userId }).populate("items.productId");

    if (!cart) {
        const subtotal = Number(product.mrp) * Number(quantity);
        const discount = (Number(product.mrp) - Number(product.price)) * Number(quantity);
        const tax = Number(subtotal) * TAX_RATE;
        const total = Number(subtotal) - Number(discount) + Number(tax);

        cart = new Cart({
            userId,
            items: [{ productId, quantity }],
            subtotal: Number(subtotal.toFixed(2)),
            discount: Number(discount.toFixed(2)),
            tax: Number(tax.toFixed(2)),
            total: Number(total.toFixed(2))
        });
    } else {
        const existingCartItem = cart.items.find((item: ICartItemDocument) =>
            item.productId && ((item.productId as IProduct)?._id?.toString() ?? '') === productId
        );

        if (existingCartItem) {
            existingCartItem.quantity += 1;
        } else {
            const product = await Product.findById(productId);

            if (!product) {
                throw new ApiError(404, "Product not found.");
            }

            cart.items.push({ productId, quantity });
        }

        cart.subtotal = cart.items.reduce((subtotal: number, item: ICartItemDocument) => {
            if (item.productId && (item.productId as IProduct).mrp) {
                return subtotal + ((item.productId as IProduct).mrp * item.quantity);
            }
            return subtotal;
        }, 0);

        cart.discount = cart.items.reduce((discount: number, item: ICartItemDocument) => {
            if (item.productId && (item.productId as IProduct).mrp && (item.productId as IProduct).price) {
                return discount + (((item.productId as IProduct).mrp - (item.productId as IProduct).price) * item.quantity);
            }
            return discount;
        }, 0);

        cart.tax = Number(cart.subtotal.toFixed(2)) * TAX_RATE;
        cart.total = cart.subtotal - cart.discount + cart.tax;
    }

    await cart.save();

    res.status(201).json(
        new ApiResponse(
            200,
            null,
            "Product added to cart successfully."
        )
    );
});

export const getCart = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const userId = req?.user?._id;

    const cart = await Cart.findOne({ userId }).populate("items.productId", "name images slug description mrp price") as ICartDocument | null;

    if (!cart) {
        throw new ApiError(404, "Cart not found.");
    }

    res.status(200).json(
        new ApiResponse(
            200,
            cart,
            "Cart retrieved successfully."
        )
    );
});

export const clearCart = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const userId = req?.user?._id;

    const cart = await Cart.findOneAndDelete({ userId });

    if (!cart) {
        throw new ApiError(404, "Cart not found.");
    }

    res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Cart cleared successfully."
        )
    );
});

export const removeFromCart = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const userId = req?.user?._id;
    const cartId = req.params.id;
    const { productId } = req.body;

    const existingCart = await Cart.findOne({ _id: cartId, userId });

    if (!existingCart) {
        throw new ApiError(404, "Cart not found.");
    }

    existingCart.items = existingCart.items.filter((item: ICartItemDocument) => {
        return item.productId && ((item.productId as IProduct)?._id?.toString() ?? '') !== productId;
    });

    existingCart.subtotal = existingCart.items.reduce((subtotal: number, item: ICartItemDocument) => {
        if (item.productId && (item.productId as IProduct).mrp) {
            return subtotal + ((item.productId as IProduct).mrp * item.quantity);
        }
        return subtotal;
    }, 0);

    existingCart.discount = existingCart.items.reduce((discount: number, item: ICartItemDocument) => {
        if (item.productId && (item.productId as IProduct).mrp && (item.productId as IProduct).price) {
            return discount + (((item.productId as IProduct).mrp - (item.productId as IProduct).price) * item.quantity);
        }
        return discount;
    }, 0);

    existingCart.tax = existingCart.subtotal * TAX_RATE;
    existingCart.total = existingCart.subtotal - existingCart.discount + existingCart.tax;

    await existingCart.save();

    res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Product removed from cart successfully."
        )
    );
});

export const updateCartItemQuantity = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const userId = req?.user?._id;
    const cartId = req.params.id;
    const { productId, quantity } = req.body;

    const existingCart = await Cart.findOne({ _id: cartId, userId });

    if (!existingCart) {
        throw new ApiError(404, "Cart not found.");
    }

    existingCart.items = existingCart.items.map((item: ICartItemDocument) => {
        if (item.productId && ((item.productId as IProduct)?._id?.toString() ?? '') === productId) {
            item.quantity = quantity;
        }
        return item;
    });

    existingCart.subtotal = existingCart.items.reduce((subtotal: number, item: ICartItemDocument) => {
        if (item.productId && (item.productId as IProduct).mrp) {
            return subtotal + ((item.productId as IProduct).mrp * item.quantity);
        }
        return subtotal;
    }, 0);

    existingCart.discount = existingCart.items.reduce((discount: number, item: ICartItemDocument) => {
        if (item.productId && (item.productId as IProduct).mrp && (item.productId as IProduct).price) {
            return discount + (((item.productId as IProduct).mrp - (item.productId as IProduct).price) * item.quantity);
        }
        return discount;
    }, 0);

    existingCart.tax = Number(existingCart.subtotal.toFixed(2)) * TAX_RATE;
    existingCart.total = existingCart.subtotal - existingCart.discount + existingCart.tax;

    await existingCart.save();

    res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Product quantity updated in cart successfully."
        )
    );
});
