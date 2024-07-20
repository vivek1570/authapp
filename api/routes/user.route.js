import express from "express";
import { x, y } from "../controllers/user.controller.js";

const route2 = express.Router();

route2.get("/", x);
route2.get("/geti", y);

export default route2;
