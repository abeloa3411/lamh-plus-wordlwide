import express from "express";
import { createCustomer, getCustomers } from "./customerController.js";

const router = express.Router();

router.route("/").get(getCustomers).post(createCustomer);

export default router;
