import mongoose from "mongoose";

const CustomerSchema = mongoose.Schema({
  customerNo: Math.floor(Math.random() * 10000 + 1),
});

const customer = mongoose.model("Customer", CustomerSchema);

export default customer;
