import express from "express";
import { registerUser, loginUsers } from "../controllers/RegisterController.js";

const routers = express.Router();

routers.post("/register", registerUser);
routers.post("/login", loginUsers);

export default routers;
