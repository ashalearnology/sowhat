import { Router } from "express";
import { addAddress, deleteAddress, getAddressById, getAddresses, updateAddress } from "../controllers/userAddress.controller.ts";
import { isLoggedIn } from "../middlewares/auth.middleware.ts";

const router: Router = Router();

router
    .route("/")
    .post(isLoggedIn, addAddress)
    .get(isLoggedIn, getAddresses);

router
    .route("/:id")
    .get(isLoggedIn, getAddressById)
    .patch(isLoggedIn, updateAddress)
    .delete(isLoggedIn, deleteAddress);

export default router;