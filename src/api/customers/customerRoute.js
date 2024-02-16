import express from "express";
import {
  createCustomer,
  getCustomers,
  getSingleCustomer,
} from "./customerController.js";

const router = express.Router();

router.route("/").get(getCustomers).post(createCustomer);
router.route("/:id").get(getSingleCustomer);

export default router;
