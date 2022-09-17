import Users from "../../model/UsersModel.js";
import loginModel from "../../model/loginModel.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

/**
 * ROTER - POST - http://localhost:8000/register
 * A function receives 3 parameters and checks if the user exists in the database and if not it is created in Mongo
 * the test according to the (email) !
 * @param {string} password
 * @param {string} name
 * @param {string} email
 */
const registration = async (password, name, email) => {
  const bcryptPasword = await bcrypt.hash(password, 10);
  const getuserByEmail = await Users.find({ email });
  if (getuserByEmail.length <= 0) {
    const user = await createUsersRegister(bcryptPasword, name, email);
    const token = await createToken(user);
    return "registration succeeded !";
  }

  if (getuserByEmail.length === 1) {
    return "The user exists in the system";
  }
};

/**
 * * ROTER - POST - http://localhost:8000/login/login
 * Creates and saves into mongoDB
 * @param {string} name
 * @param {string} password
 */
const login = async (email, password) => {
  const bcryptPasword = await bcrypt.hash(password, 10);
  const resultLogin = crreateUserLogin(email, bcryptPasword);
  return resultLogin;
};

/**
 * create user for register into mongoDB use libary bcrypt
 * @param {string} bcryptPasword
 * @param {string} name
 * @param {string} email
 */
const createUsersRegister = async (bcryptPasword, name, email) => {
  try {
    const createUser = await Users.create({
      name: name,
      email: email,
      password: bcryptPasword,
    });
    return createUser;
  } catch (error) {
    return "error , user log in not created , try again", error;
  }
};

/**
 * create user for login into mongoDB use libary bcrypt
 * @param {string} bcryptPasword
 * @param {string} name
 */
const crreateUserLogin = async (email, bcryptPasword) => {
  try {
    const resultLogin = await loginModel.create({
      email,
      password: bcryptPasword,
    });
    return resultLogin;
  } catch (error) {
    return "error , user log in not created , try again", error;
  }
};

const createToken = async (user) => {
  const signJWT = await Jwt.sign({ user }, process.env.MY_SECRET, {
    expiresIn: "1h",
  });
  return signJWT;
};

export { registration, login };
