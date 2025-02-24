import { Router } from "express";
import { addAddress, deleteAddress, getAddressById, getAddresses, updateAddress } from "../controllers/userAddress.controller.ts";
import { isLoggedIn } from "../middlewares/auth.middleware.ts";
import { authorizedRoles } from "../middlewares/authorizedRoles.middleware.ts";

const router: Router = Router();

router
    .route("/")
    .post(isLoggedIn, authorizedRoles("user"), addAddress)
    .get(isLoggedIn, authorizedRoles("user"), getAddresses);

router
    .route("/:id")
    .get(isLoggedIn, authorizedRoles("user"), getAddressById)
    .patch(isLoggedIn, authorizedRoles("user"), updateAddress)
    .delete(isLoggedIn, authorizedRoles("user"), deleteAddress);

export default router;