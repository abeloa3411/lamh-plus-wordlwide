import express from "express";
import { createOder, getOrders, getReport } from "./orderController.js";

const router = express.Router();

router.route("/").get(getOrders).post(createOder);
router.route("/report").post(getReport);

export default router;
