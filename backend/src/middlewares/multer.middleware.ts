import multer, { StorageEngine, FileFilterCallback } from 'multer';
import { Request } from 'express';
import path from 'path';

const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.avi', '.mov', '.mkv'];

// Helper function to check if file type is valid
const isValidFileType = (file: Express.Multer.File): boolean => {
    const extname = path.extname(file.originalname).toLowerCase();
    return allowedExtensions.includes(extname);
};

// Storage configuration
const storage: StorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/temp');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// File filter function for validating file types (images and videos)
const fileFilter: multer.Options['fileFilter'] = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (isValidFileType(file)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type'));
    }
};

export const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 50 * 1024 * 1024 // 50 MB
    }
});
