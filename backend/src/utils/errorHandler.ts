import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError.ts';

const errorHandler = (err: ApiError | Error | any, req: Request, res: Response, next: NextFunction) => {
    console.error("Global Error Handler:", err);

    let statusCode = 500;
    let message = "Something went wrong";
    let errors: any[] = [];

    if (err instanceof ApiError) {
        statusCode = err.statusCode;
        message = err.message;
        errors = err.errors || [];
    } else if (err instanceof Error) {
        message = err.message;
    } else {
        message = String(err);
    }

    res.status(statusCode).json({
        success: false,
        statusCode,
        message: statusCode === 500 ? "An error occurred" : message,
        errors: errors,
    });
};

export default errorHandler;
