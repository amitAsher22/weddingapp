import express from "express";
import { authValidation } from "../validation/authValidation.js";
// import { loginUserValidation } from "../validation/loginValidation.js";
import { registerUser, loginUsers } from "../controllers/RegisterController.js";
// import { verifyJWT } from "../controllers/RegisterController.js";

const routers = express.Router();

routers.post("/register", authValidation, registerUser);
routers.post("/login", loginUsers);
// routers.get("/verify", , verify);

export default routers;
