import Users from "../../model/UsersModel.js";
import loginModel from "../../model/loginModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

const createToken = async (user) => {
  return jwt.sign(
    { userId: user._id, email: user.email },
    process.env.MY_SECRET,
    { expiresIn: "1h" }
  );
};

/**
 * ROTER - POST - http://localhost:8000/register
 * A function receives 3 parameters and checks if the user exists in the database and if not it is created in Mongo
 * the test according to the (email) !
 * @param {string} password
 * @param {string} name
 * @param {string} email
 *
 */
const registrationServices = async (password, name, email, error) => {
  const bcryptPasword = await bcrypt.hash(password, 10);
  const user = await Users.find({ email });
  if (user.length == []) {
    const user = await createUsersRegister(bcryptPasword, name, email);
    const token = await createToken(user);
    const userWithToken = { ...user._doc, token };
    return "register success";
  } else if (error.errors.length > 0) {
    return error;
  } else if (user.length > 0) {
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
  const user = await Users.find({ email });
  console.log(user);
};

const createUserLogin = async (email, bcryptPasword) => {
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

export { registrationServices, login };
