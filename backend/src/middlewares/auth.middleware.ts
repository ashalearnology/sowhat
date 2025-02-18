import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.ts";
import User, { IUser } from "../models/user.model.ts";

declare global {
    namespace Express {
        interface Request {
            user?: IUser;
        }
    }
}

export const isLoggedIn = async (req: Request, res: Response, next: NextFunction) => {
    let token: string | undefined = req.headers.authorization?.split(" ")[1];

    if (!token && req.cookies?.accessToken) {
        token = req.cookies.accessToken;
    }

    if (!token) {
        return next(new ApiError(401, "Unauthorized - No token provided"));
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

        if (!decodedToken || !decodedToken.id) {
            return next(new ApiError(401, "Unauthorized - Invalid token payload"));
        }

        const user = await User.findById(decodedToken.id).select("-password").lean();

        if (!user) {
            return next(new ApiError(401, "Unauthorized - User not found"));
        }

        req.user = user;
        next();
    } catch (error: unknown) {
        const err = error as Error;
        
        if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
            return next(new ApiError(401, "Unauthorized - Invalid or expired token"));
        }

        console.error("JWT Verification Error:", err);

        return next(new ApiError(401, "Unauthorized - Invalid token"));
    }
};
