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

const EnquirySchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  inqNo: {
    type: String,
    default: generateOrderNumber(),
  },
  date: Date.now(),
  message: String,
  state: String,
});

const Enquiry = mongoose.model("Enquiry", EnquirySchema);

export default Enquiry;
