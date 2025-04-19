import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.ts";
import Order, { IOrder } from "../models/order.model.ts";
import { ApiError } from "../utils/ApiError.ts";
import { ApiResponse } from "../utils/ApiResponse.ts";

export const createOrder = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { orderItem, shippingAddress, paymentMethod, totalPrice } = req.body;

    if (!orderItem || orderItem.length === 0) {
      new ApiError(400, "No order items");
    }

    const order = await Order.create({
      userId: req.user?._id,
      orderItem,
      shippingAddress,
      paymentMethod,
      totalPrice,
    });

    res
      .status(201)
      .json(new ApiResponse(201, order, "Order created successfully."));
  }
);

export const cancelOrder = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const orderId = req.params.id;

    if (!orderId) {
      new ApiError(400, "OrderId is required");
    }

    const order = (await Order.findById(orderId)) as IOrder;

    if (!order) {
      new ApiError(400, "Order not found");
    }

    order.status = "cancelled";
    await order.save();

    res
      .status(200)
      .json(new ApiResponse(201, order, "Order cancelled successfully"));
  }
);

export const updateOrder = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {}
);
