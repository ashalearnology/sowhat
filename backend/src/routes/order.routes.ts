import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.ts";
import {
  cancelOrder,
  createOrder,
  updateOrder,
} from "../controllers/order.controller.ts";

const router = Router();

router
    .route("/")
    .post( isLoggedIn, createOrder)
    .get(isLoggedIn, getOrderDetails)



router.put("/cancel/:id", isLoggedIn, cancelOrder);
router.patch("/update/:id", isLoggedIn, updateOrder);

export default router;
