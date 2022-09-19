import express from "express";
import { registerUser, login } from "../controllers/AuthController";

const routers = express.Router();

routers.post("/register", registerUser);
routers.post("/login", login);

export default routers;
