import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static signup method

UserSchema.statics.signup = async function (name, email, password) {
  if (!name || !email || !password) {
    throw Error("Please fill in all fields");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("user already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const newUser = await this.create({
    name,
    email,
    password: hash,
  });

  return newUser;
};

//login method

UserSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Please fill in all fields");
  }

  const exists = await this.findOne({ email });

  if (!exists) {
    throw Error("User does not exist");
  }

  const match = await bcrypt.compare(password, exists.password);
  if (!match) {
    throw Error("Incorect password");
  }

  return exists;
};

const User = mongoose.model("User", UserSchema);

export default User;
