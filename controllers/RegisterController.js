import {
  registrationServices,
  login,
} from "../services/authentication/auth.js";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

/**
 *  * ROTER - POST - http://localhost:8000/register
 * A function that takes 3 parameters from the req.body and performs validation according to the conditions I decided (express-validator)
 * Sending the mongodb parameters (registration )
 * @param {string} name
 * @param {string} password
 * @param {string} email
 * @returns
 */
const registerUser = async (req, res) => {
  try {
    const error = validationResult(req);
    const { password, name, email } = req.body;
    const resultFromServices = await registrationServices(
      password,
      name,
      email,
      error
    );

    res.json({ result: resultFromServices });
  } catch (error) {
    res.json({ "register error": error });
  }
};

/**
 * * * ROTER - POST - http://localhost:8000/login/login
 * A function that takes 3 parameters from the req.body and performs validation according to the conditions I decided (express-validator)
 *  * Sending the mongodb parameters (login )
 * @param {string} name
 * @param {string} password
 * @returns
 */
const loginUsers = async (req, res) => {
  const error = validationResult(req);
  if (error.errors.length > 0) {
    return res.json({ error });
  }
  const { email, password } = req.body;
  const result = await login(email, password);
  return res.json({ result });
};

const testUser = async (req, res) => {
  console.log("get into usertest!!!!!!!!");
  res.send("test work");
};

const verify = (req, res, next) => {
  const authHeader = req.headers["x-access-token"];
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }
    jwt.verify(token, process.env.MY_SECRET_TOKEN);
    next();
  } else {
    res.status(401).json("you are not authenticated!");
  }
};

export { registerUser, loginUsers, verify, testUser };
