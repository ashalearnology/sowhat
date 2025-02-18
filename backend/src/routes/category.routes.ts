import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.ts";
import { addCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from "../controllers/category.controller.ts";

const router: Router = Router();

router
    .route("/")
    .post(isLoggedIn, addCategory)
    .get(getCategories)

router
    .route("/:id")
    .get(getCategoryById)
    .patch(isLoggedIn, updateCategory)
    .delete(isLoggedIn, deleteCategory)

export default router;