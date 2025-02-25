import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.ts";
import { addToCart, getCart } from "../controllers/cart.controller.ts";

const router: Router = Router();

router
    .route("/")
    .get(isLoggedIn, getCart)
    .post(isLoggedIn, addToCart)

export default router;