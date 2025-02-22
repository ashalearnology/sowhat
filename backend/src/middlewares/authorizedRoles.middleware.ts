import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError.ts";

export const authorizedRoles = (...roles: string[]) => (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
        throw new ApiError(401, "Unauthorized - Access denied.");
    }
    next();
};