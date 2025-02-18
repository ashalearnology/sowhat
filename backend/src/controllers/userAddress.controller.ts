import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.ts";
import { ApiError } from "../utils/ApiError.ts";
import UserAddress from "../models/userAddress.model.ts";
import { ApiResponse } from "../utils/ApiResponse.ts";

export const addAddress = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { firstName, lastName, phone, address, appartment, company, city, state, country, zipCode, isDefault } = req.body;

    if ([firstName, lastName, phone, address, city, state, country, zipCode].some((field) => !field || field.trim() === "")) {
        throw new ApiError(400, "All fields are required.");
    }

    if (isDefault) {
        await UserAddress.updateMany({ user: req.user?._id }, { isDefault: false });
    }

    const userAddress = await UserAddress.create({
        user: req.user?._id,
        firstName,
        lastName,
        phone,
        address,
        appartment,
        company,
        city,
        state,
        country,
        zipCode,
        isDefault: isDefault || false
    });

    res.status(201).json(
        new ApiResponse(
            201,
            userAddress,
            "Address added successfully."
        )
    );
});

export const getAddresses = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const addresses = await UserAddress.find({ user: req.user?._id }).populate("user", "firstName lastName email").lean();

    if (addresses.length === 0) {
        throw new ApiError(404, "No addresses found.");
    }

    res.status(200).json(
        new ApiResponse(
            200,
            addresses,
            "Addresses fetched successfully."
        )
    );
});

export const getAddressById = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const address = await UserAddress.findById(req.params.id).populate("user", "firstName lastName email").lean();

    if (!address) {
        throw new ApiError(404, "Address not found.");
    }

    res.status(200).json(
        new ApiResponse(
            200,
            address,
            "Address fetched successfully."
        )
    );
});

export const updateAddress = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const address = req.body;

    if (address.isDefault) {
        await UserAddress.updateMany({ user: req.user?._id }, { isDefault: false });
    }

    const userAddress = await UserAddress.findByIdAndUpdate(req.params.id, address, { new: true });

    if (!userAddress) {
        throw new ApiError(404, "Address not found.");
    }

    res.status(200).json(
        new ApiResponse(
            200,
            userAddress,
            "Address updated successfully."
        )
    );
});

export const deleteAddress = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const address = await UserAddress.findByIdAndDelete(req.params.id);

    if (!address) {
        throw new ApiError(404, "Address not found.");
    }

    res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Address deleted successfully."
        )
    );
});