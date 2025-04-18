import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.ts";
import { addToCart, clearCart, getCart, removeFromCart, updateCartItemQuantity } from "../controllers/cart.controller.ts";

const router: Router = Router();

router
    .route("/")
    .get(isLoggedIn, getCart)
    .post(isLoggedIn, addToCart)

router.delete("/clear", isLoggedIn, clearCart);

router
    .route("/:id")
    .patch(isLoggedIn, updateCartItemQuantity)
    .delete(isLoggedIn, removeFromCart);

export default router;