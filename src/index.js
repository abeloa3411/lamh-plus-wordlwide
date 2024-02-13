import express from "express";
import path from "path";
import dotenv from "dotenv";
import orders from "./api/orders/orderRoutes.js";
import customers from "./api/customers/customerRoute.js";
import auth from "./api/auth/authRoute.js";
import inquiries from "./api/inquiries/inquiryRoute.js";
import cors from "cors";

dotenv.config();

const app = express();
const __dirname = path.resolve();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/orders", orders);
app.use("/api/v1/customer", customers);
app.use("/api/v1/inquiries", inquiries);
app.use("/api/v1/auth", auth);

app.use(express.static(path.join(__dirname, "src", "public")));

app.get("/", (req, res) => {
  res.json({
    msg: "The api is running well",
  });
});

export default app;
