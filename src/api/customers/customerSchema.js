import mongoose from "mongoose";

const CustomerSchema = mongoose.Schema({
  customerNo: String,
  name: String,
  address: String,
  contact: String,
  email: String,
});

const Customer = mongoose.model("Customer", CustomerSchema);

export default Customer;
