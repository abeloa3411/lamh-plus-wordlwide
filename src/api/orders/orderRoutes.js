import express from "express";
import { createOder, getOrders } from "./orderController.js";

const router = express.Router();

router.route("/").get(getOrders).post(createOder);

export default router;
