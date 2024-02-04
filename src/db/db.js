import mongoose from "mongoose";

function connectDB(connectString) {
  return mongoose.connect(connectString);
}

export default connectDB;
