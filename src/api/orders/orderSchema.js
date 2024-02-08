import mongoose from "mongoose";

function generateOrderNumber() {
  // Generate a random number
  const randomNumber = Math.floor(Math.random() * 1000000);

  // Get the current timestamp
  const timestamp = new Date().getTime();

  // Concatenate the timestamp and random number to create a unique order number
  const orderNumber = `${timestamp}-${randomNumber}`;

  return orderNumber;
}

const OrderSchema = mongoose.Schema({
  name: String,
  email: String,
  orderNo: {
    type: String,
    default: generateOrderNumber(),
  },
  origin: String,
  destination: String,
  recipient: String,
  shipper: String,
  cost: String,
  chargeableWeight: String,
  descriptoin: String,
  dimensions: String,
  merchant: String,
  orderDate: String,
  deliveryDate: String,
  descriptoin: String,
  currentLocation: String,
  state: {
    type: String,
    default: "Not fullfilled",
  },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
