import express from "express";
import { SignUp, test } from "../controllers/auth.controller.js";
const route = express.Router();

// route.get("/",)
route.post("/signup", SignUp);
route.get("/test", test);

export default route;
