import { Router } from "express";
import { addMultipleProducts, addProduct, deleteProduct, getFeaturedProducts, getOnSaleProducts, getProductById, getProducts, getProductsByCategory, searchProducts, updateProduct } from "../controllers/product.controller.ts";
import { authorizedRoles } from "../middlewares/authorizedRoles.middleware.ts";
import { isLoggedIn } from "../middlewares/auth.middleware.ts";

const router: Router = Router();

router.route("/")
    .post(isLoggedIn, authorizedRoles("admin"), addProduct)
    .get(getProducts);

router.route("/featured")
    .get(getFeaturedProducts);

router.route("/sale")
    .get(getOnSaleProducts);

router.route("/search")
    .get(searchProducts);

router.route("/bulk")
    .post(isLoggedIn, authorizedRoles("admin"), addMultipleProducts);

router.route("/category/:id")
    .get(getProductsByCategory);

router.route("/:id")
    .get(getProductById)
    .patch(isLoggedIn, authorizedRoles("admin"), updateProduct)
    .delete(isLoggedIn, authorizedRoles("admin"), deleteProduct)

export default router;