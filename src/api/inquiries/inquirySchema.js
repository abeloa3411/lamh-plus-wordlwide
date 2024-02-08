import mongoose from "mongoose";

const EnquirySchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  inqNo: {
    type: Number,
    default: Math.floor(Math.random() * 100000 + 1) + 1,
  },
  date: Date.now(),
  message: String,
  state: String,
});
