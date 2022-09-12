// import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";
import Users from "../model/UsersModel.js";
import { registerServices } from "../services/services.registerUser.js";

///@ route    POST /register
const registerUser = async (req, res) => {
  const result = await registerServices(req, res);
};

///@ route    POST /register/login
const loginUser = async (req, res) => {
  res.json({ message: "login" });
};

///@ route    GET /register/me
const getMe = async (req, res) => {
  res.json({ message: "User data display" });
};

export { registerUser, loginUser, getMe };
