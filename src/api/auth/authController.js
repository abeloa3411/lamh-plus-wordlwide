import User from "./authSchema.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "1d" });
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw Error("All fields required");
  }

  try {
    //login the user to the db
    const user = await User.login(email, password);

    //create the token
    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const userSignup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw Error("All fields required");
  }

  try {
    //sign up the user
    const user = await User.signup(name, email, password);

    //create the token
    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
