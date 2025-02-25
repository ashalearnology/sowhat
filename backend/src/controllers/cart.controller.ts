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

    const product = await Product.findById(productId);
    if (!product) {
        throw new ApiError(404, "Product not found.");
    }

    let cart = await Cart.findOne({ userId }).populate("items.productId") as ICartDocument | null;

    if (!cart) {
        const subtotal = product.mrp * quantity;
        const discount = (product.mrp - product.price) * quantity;
        const tax = subtotal * TAX_RATE;
        const total = subtotal - discount + tax;

        cart = new Cart({
            userId,
            items: [{ productId, quantity }],
            subtotal,
            discount,
            tax,
            total
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

            cart.items.push(new Cart.schema.methods.createItem({ productId: new mongoose.Types.ObjectId(product._id), quantity }));
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

        cart.tax = cart.subtotal * TAX_RATE;
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