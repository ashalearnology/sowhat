import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.ts";

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload | { id: string };
        }
    }
}

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;

    if (!token) {
        throw new ApiError(401, "Unauthorized - No token provided");
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

        req.user = decodedToken;

        next();
    } catch (error) {
        throw new ApiError(401, "Unauthorized - Invalid token");
    }
};
