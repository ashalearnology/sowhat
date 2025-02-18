class ApiError extends Error {
    public statusCode: number;
    public success: boolean;
    public errors: any[];
    public data: any | null;

    constructor(
        statusCode: number = 500,
        message: string = "Something Went Wrong",
        errors: any[] = [],
        stack?: string
    ) {
        super(message);
        
        this.statusCode = statusCode;
        this.success = false;
        this.errors = errors;
        this.data = null;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
