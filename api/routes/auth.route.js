import express from "express";
import { SignUp, test, test1 } from "../controllers/auth.controller.js";
const route = express.Router();

// route.get("/",)
route.post("/signup", SignUp);
// test for getting data from movie list
route.get("/test", test);
// posting data from movie list
route.post("/test1", test1);

export default route;
