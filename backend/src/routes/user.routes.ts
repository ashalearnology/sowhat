import { Router } from "express";
import { getUser, login, logout, register } from "../controllers/user.controller.ts";
import { isLoggedIn } from "../middlewares/auth.middleware.ts";

const router: Router = Router();

router.post("/register", register);
router.post("/login", login);

// Protected routes
router.post("/logout", isLoggedIn, logout);
router.get("/me", isLoggedIn, getUser);

export default router;