import { registerServices } from "../services/register.services.js";
import { validationResult } from "express-validator";

const registerUser = async (req, res) => {
  const { password, name, email } = req.body;
  // validated the inputs
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json({ errors: errors.array() });

  const result = await registerServices(password, name, email);
  console.log(result);
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
