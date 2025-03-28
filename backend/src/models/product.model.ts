import { Schema, model, Types } from "mongoose";

interface IProduct {
    _id?: string;
    name: string;
    slug: string;
    description: string;
    images: string[];
    size: string;
    wishlist: boolean;
    category: Types.ObjectId;
    price: number;
    quantity: number;
    isFeatured: boolean;
    onSale: boolean;
    isWishlist: boolean;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: [true, "Product name is required"],
        maxLength: [100, "Product name cannot exceed 100 characters"],
        trim: true,
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
        required: [true, "Product description is required"],
        maxLength: [500, "Product description cannot exceed 500 characters"]
    },
    images: {
        type: [String],
        // required: [true, "Product images are required"],
    },
    size: {
        type: String,
        trim: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: [0, "Product price cannot be negative"],
    },
    quantity: {
        type: Number,
        required: [true, "Product quantity is required"],
        min: [0, "Product quantity cannot be negative"],
    },
    onSale: {
        type: Boolean,
        default: false
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    isWishlist: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true, versionKey: false });

const Product = model<IProduct>("Product", productSchema);
export default Product;