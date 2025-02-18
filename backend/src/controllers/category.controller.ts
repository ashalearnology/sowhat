import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.ts";
import { ApiError } from "../utils/ApiError.ts";
import Category from "../models/category.model.ts";
import { ApiResponse } from "../utils/ApiResponse.ts";

export const addCategory = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { name, description } = req.body;

    if ([name, description].some((field) => !field || field.trim() === "")) {
        throw new ApiError(400, "All fields are required.");
    }

    const existingCategory = await Category.findOne({ name }, { _id: 1 }).lean();

    if (existingCategory) {
        throw new ApiError(400, "Category already exists.");
    }

    const category = await Category.create({
        name,
        description,
        slug: name.toLowerCase().replace(/ /g, "-"),
    })

    res.status(201).json(
        new ApiResponse(
            201,
            category,
            "Category created successfully."
        )
    );
});

export const getCategories = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const categories = await Category.find().lean();

    if (categories.length === 0) {
        throw new ApiError(404, "No categories found.");
    }

    res.status(200).json(
        new ApiResponse(
            200,
            categories,
            "Categories fetched successfully."
        )
    );
});

export const getCategoryById = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const category = await Category.findById(req.params.id).lean();

    if (!category) {
        throw new ApiError(404, "Category not found.");
    }

    res.status(200).json(
        new ApiResponse(
            200,
            category,
            "Category fetched successfully."
        )
    );
});

export const updateCategory = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const category = req.body;

    const existingCategory = await Category.findOne({ name: category.name }, { _id: 1 }).lean();

    if (existingCategory && existingCategory._id.toString() !== req.params.id) {
        throw new ApiError(400, "Category already exists.");
    }

    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, { ...category, slug: category.name.toLowerCase().replace(/ /g, "-") }, { new: true });

    if (!updatedCategory) {
        throw new ApiError(404, "Category not found.");
    }

    res.status(200).json(
        new ApiResponse(
            200,
            updatedCategory,
            "Category updated successfully."
        )
    );
});

export const deleteCategory = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
        throw new ApiError(404, "Category not found.");
    }

    res.status(200).json(
        new ApiResponse(
            200,
            category,
            "Category deleted successfully."
        )
    );
});