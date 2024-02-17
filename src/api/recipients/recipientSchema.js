import mongoose from "mongoose";

const RecipientSchema = mongoose.Schema({
  recipientNo: String,
  name: String,
  phone: String,
  city: String,
  country: String,
  company: String,
  address: String,
  zipcode: String,
  email: String,
});

const Recipient = mongoose.model("Recipient", RecipientSchema);

export default Recipient;
