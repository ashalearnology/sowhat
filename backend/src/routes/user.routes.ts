import { Router } from "express";
import { forgotPassword, getUser, login, logout, refreshAccessToken, register, resetPassword } from "../controllers/user.controller.ts";
import { isLoggedIn } from "../middlewares/auth.middleware.ts";

const router: Router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh-token", refreshAccessToken);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

// Protected routes
router.post("/logout", isLoggedIn, logout);
router.get("/me", isLoggedIn, getUser);

export default router;