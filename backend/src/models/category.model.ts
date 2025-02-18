import { Schema, model } from "mongoose";

export interface ICategory {
    _id?: string;
    name: string;
    slug: string;
    description: string;
    image?: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

const categorySchema = new Schema<ICategory>({
    name: {
        type: String,
        required: [true, "Category name is required"],
        maxLength: [100, "Category name cannot exceed 100 characters"],
        trim: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        trim: true,
        required: [true, "Category description is required"],
        maxLength: [500, "Category description cannot exceed 500 characters"]
    },
    image: {
        type: String,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true, versionKey: false });

const Category = model<ICategory>("Category", categorySchema);
export default Category;