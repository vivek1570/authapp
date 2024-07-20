import User from "../models/user.model.js";
const SignUp = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  try {
    await newUser.save();
    res.status(201).json({ message: "user created succesfully" });
  } catch (err) {
    res.status(500).json({ message: "duplicate key error " });
  }
};

const test = (req, res) => {
  res.json({
    message: "hello from vivek",
  });
};

export { SignUp, test };
