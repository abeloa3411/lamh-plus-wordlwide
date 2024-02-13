import mongoose from "mongoose";

const EnquirySchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  inqNo: String,
  date: String,
  description: String,
});

const Enquiry = mongoose.model("Enquiry", EnquirySchema);

export default Enquiry;
