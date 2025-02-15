import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.ts";
import { ApiResponse } from "../utils/ApiResponse.ts";
import { ApiError } from "../utils/ApiError.ts";
import User from "../models/user.model.ts";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { firstName, lastName, email, password } = req.body;

    if ([firstName, lastName, email, password].some((field) => !field || field.trim() === "")) {
        throw new ApiError(400, "All fields are required.", ["firstName", "lastName", "email", "password"]);
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new ApiError(400, "User already exists.", ["email"]);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    });

    res.status(201).json(
        new ApiResponse(
            201,
            user,
            "User created successfully."
        )
    );
});

export const login = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    if ([email, password].some((field) => !field || field.trim() === "")) {
        throw new ApiError(400, "All fields are required.");
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new ApiError(404, "User not found.");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid credentials.");
    }

    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET!,
        { expiresIn: '7d' }
    );

    res
        .status(200)
        .cookie("token", token, cookieOptions)
        .json(
            new ApiResponse(
                200,
                { token },
                "Login successful."
            )
        );
});

export const logout = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    res
        .status(200)
        .cookie("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 0,
        })
        .json(
            new ApiResponse(
                200,
                null,
                "Logout successful."
            )
        );
});

export const getUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    if (!req.user) {
        throw new ApiError(401, "Unauthorized.");
    }

    const user = await User.findById(req.user.id);

    if (!user) {
        throw new ApiError(404, "User not found.");
    }

    const cleanedUser = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
    };

    res.status(200).json(
        new ApiResponse(
            200,
            cleanedUser,
            "User details fetched successfully."
        )
    );
});