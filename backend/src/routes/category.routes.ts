import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.ts";
import { addCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from "../controllers/category.controller.ts";
import { authorizedRoles } from "../middlewares/authorizedRoles.middleware.ts";

const router: Router = Router();

router
    .route("/")
    .post(isLoggedIn, authorizedRoles("admin"), addCategory)
    .get(getCategories)

router
    .route("/:id")
    .get(getCategoryById)
    .patch(isLoggedIn, authorizedRoles("admin"), updateCategory)
    .delete(isLoggedIn, authorizedRoles("admin"), deleteCategory)

export default router;