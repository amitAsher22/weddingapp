import { validationResult } from "express-validator";
import Users from "../model/UsersModel.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

const createUsersRegister = async (bcryptPasword, name, email) => {
  const createUser = await Users.create({
    name: name,
    email: email,
    password: bcryptPasword,
  });
  return createUser;
};

/**
 * ROTER - POST - http://localhost:8000/register
 * A function receives 3 parameters and checks if the user exists in the database and if not it is created in Mongo
 * the test according to the (email) !
 * @param {string} password
 * @param {string} name
 * @param {string} email
 */
 const registration = async (password, name, email, next) => {
  console.log('params', password, name, email);

  const bcryptPasword = await bcrypt.hash(password, 10);

  const user = await Users.find({ email });
  if (user.length > 0) {
    throw new Error("User already exists!");
  }
  if (!user || user.length <= 0) {
    const user = await createUsersRegister(bcryptPasword, name, email);
    const token = createToken(user);
    user.token = token;
    console.log("token", token);
    return user;
  }  
};

/**
 *  * ROTER - POST - http://localhost:8000/register
 * A function that takes 3 parameters from the req.body and performs validation according to the conditions I decided (express-validator)
 * Sending the mongodb parameters (registration )
 * @param {string} name
 * @param {string} password
 * @param {string} email
 * @returns
 */
const registerUser = async (req, res, next) => {
  console.log('body', req.body);

  try {
    const error = validationResult(req);    
    if (error.errors.length > 0) {
      return res.json({ message: error.errors });
    } else {
      const { password, name, email } = req.body;
      const user = await registration(password, name, email, next);
      return res.status(201).json({ user });
    }
  } catch (error) {
    console.log("register error", error);
    return res.status(400).json({ message: error.message });
  }
};

const createToken = (user) => {
  const signJWT = JWT.sign({ user }, process.env.MY_SECRET, {
    expiresIn: "1H",
  });

  return signJWT;
};

/**
 * * ROTER - POST - http://localhost:8000/login/login
 * Creates and saves into mongoDB
 * @param {string} name
 * @param {string} password
 */
 const login = async (req, res) => {
  try{
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }
    console.log('user', user);
    const comparison = await bcrypt.compare(password, user.password);
    if (comparison) {
      const token = createToken(user);
      console.log("login-token", token);
      const userAndToken = {...user, token};
      return res.status(200).json({ user: userAndToken });   
    }
    return res.status(400).json({ message: "failed to login!" });   
  } catch (e) {
    return res.status(400).json({ message: e.message });
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
const auth = async (req, res, next) => {
  try {
    const error = validationResult(req);    
    if (error.errors.length > 0) {
      throw new Error(error.errors);
    } else {
      const { token } = req.body;
      const result = JWT.verify(token, process.env.MY_SECRET);
      next();
    }
  } catch (error) {
    console.log("login error", error);
    throw new Error(error.message);
  }
};

export { registerUser, login, auth };
