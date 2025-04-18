import { Schema, model, Types } from "mongoose";

export interface ISizes {
    size: string;
    stock: number;
}

export interface IProduct {
    _id?: string;
    name: string;
    slug: string;
    description: string;
    images: string[];
    sizes: ISizes[];
    wishlist: boolean;
    category: Types.ObjectId;
    mrp: number;
    price: number;
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
    },
    sizes: [
        {
            size: {
                type: String,
                required: true,
                enum: ["2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"]
            },
            stock: {
                type: Number,
                required: true,
                min: [0, "Product stock cannot be negative"]
            }
        }
    ],
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    mrp: {
        type: Number,
        required: [true, "Product MRP is required"],
        min: [0, "Product MRP cannot be negative"],  
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: [0, "Product price cannot be negative"],
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