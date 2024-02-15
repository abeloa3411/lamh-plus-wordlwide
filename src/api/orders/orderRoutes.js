import express from "express";
import {
  createOder,
  deleteOrder,
  getOrders,
  getReport,
} from "./orderController.js";

const router = express.Router();

router.route("/").get(getOrders).post(createOder);
router.route("/:id").delete(deleteOrder);
router.route("/report").post(getReport);

export default router;
