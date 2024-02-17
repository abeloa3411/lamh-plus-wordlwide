import mongoose from "mongoose";

const ShipperSchema = mongoose.Schema({
  shipperNo: String,
  name: String,
  phone: String,
  city: String,
  country: String,
  company: String,
  address: String,
  zipcode: String,
  email: String,
});

const Shipper = mongoose.model("Shipper", ShipperSchema);

export default Shipper;
