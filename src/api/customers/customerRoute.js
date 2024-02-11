import express from "express";
import { createCustomer, getCustomers } from "./customerController.js";

const router = express.Router();

router.route("/customers").get(getCustomers).post(createCustomer);

export default router;
