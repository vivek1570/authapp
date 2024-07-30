import User from "../models/user.model.js";
import MovieList from "../models/list.model.js";
import bcryptjs from "bcryptjs";
import { errorhandler } from "../utils/error.js";

const SignUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "user created succesfully" });
  } catch (err) {
    next(errorhandler(500, "something went wrong!,duplicate key error"));
  }
};

const test = async (req, res, next) => {
  try {
    const data = await MovieList.find();
    if (!data) {
      next(errorhandler(500, "there is some erro while fetching from db"));
    }
    res.status(200).json({ data });
  } catch (err) {
    next(err.message);
  }
};

const test1 = async (req, res, next) => {
  const { movie } = req.body;
  const newList = new MovieList({ movie });
  try {
    await newList.save();
    res.status(201).json({ message: `movie ${movie} has been stored` });
  } catch (err) {
    next(errorhandler(500, "there is some error while storing the movie"));
  }
};

export { SignUp, test, test1 };
