import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
