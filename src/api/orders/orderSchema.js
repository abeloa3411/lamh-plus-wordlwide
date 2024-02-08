import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
  name: String,
  email: String,
  orderNo: {
    type: Number,
    default: Math.floor(Math.random() * 1000000 + 1),
  },
  origin: String,
  destination: String,
  recipient: String,
  shipper: String,
  cost: String,
  chargeableWeight: String,
  dimensions: String,
  merchant: String,
  orderDate: String,
  deliveryDate: String,
  descriptoin: String,
  currentLocation: String,
  state: String,
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
