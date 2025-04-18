import { Document, Schema, model } from "mongoose";
import { IProduct } from "./product.model.ts";

export interface ICartItem {
    productId: Schema.Types.ObjectId | IProduct;
    quantity: number;
}

export interface ICartDocument extends Document {
    userId: Schema.Types.ObjectId;
    items: ICartItem[];
    subtotal: number;
    discount: number;
    tax: number;
    total: number;
}

const cartItemSchema = new Schema<ICartItem>({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
});

const cartSchema = new Schema<ICartDocument>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [cartItemSchema],
    subtotal: {
        type: Number,
        min: 0
    },
    discount: {
        type: Number,
        min: 0
    },
    tax: {
        type: Number,
        min: 0
    },
    total: {
        type: Number,
        min: 0
    }
}, { timestamps: true, versionKey: false });

const Cart = model<ICartDocument>("Cart", cartSchema);
export default Cart;