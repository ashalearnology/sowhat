import mongoose, { Schema, model, Document, Types } from "mongoose";

export interface IOrderItem {
  Product: Types.ObjectId;
  quantity: number;
  price: number;
}

export interface IOrder extends Document {
  userId: Types.ObjectId;
  orderItem: IOrderItem[];
  status: "confirmed" | "shipped" | "delivered" | "cancelled" | "pending";
  shippingAddress: string;
  paymentMethod: string;
  totalPrice: number;
  isPaid: boolean;
  paidAt?: Date;
  isDeliverd: boolean;
  deliveredAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema<IOrder>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItem: [
      {
        Product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
        price: Number,
      },
    ],
    status: {
      type: String,
      enum: ["confirmed", "shipped", "delivered", "cancelled", "pending"],
      default: "pending",
    },
    shippingAddress: String,
    paymentMethod: String,
    totalPrice: Number,
    isPaid: {
      type: Boolean,
      default: false,
    },
    paidAt: Date,
    isDeliverd: {
      type: Boolean,
      default: false,
    },
    deliveredAt: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Order = model<IOrder>("Order", orderSchema);
export default Order;
