import mongoose from "mongoose";

function generateOrderNumber() {
  // Generate a random number
  const randomNumber = Math.floor(Math.random() * 1000000);

  // Get the current timestamp
  const timestamp = new Date().getTime();

  // Concatenate the timestamp and random number to create a unique order number
  const orderNumber = `${timestamp}`;

  return orderNumber;
}

const OrderSchema = mongoose.Schema({
  name: String,
  email: String,
  orderNo: String,
  contact: String,
  address: String,
  shipperName: String,
  shipperCompany: String,
  shipperPhone: String,
  shipperAddress: String,
  shipperCity: String,
  shipperZip: String,
  shipperCountry: String,
  shipperEmail: String,
  recipientName: String,
  recipientCompany: String,
  recipientPhone: String,
  trackingNo: String,
  recipientAddress: String,
  recipientCity: String,
  recipientZip: String,
  recipientCountry: String,
  recipientEmail: String,
  weight: String,
  dimension: String,
  merchant: String,
  chargeableWeight: String,
  cost: Number,
  sale: Number,
  value: String,
  description: String,
  orderDate: String,
  state: {
    type: String,
    default: "Not delivered",
  },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
