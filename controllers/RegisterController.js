import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";
import Users from "../model/UsersModel.js";

///@ route    POST /register
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  /// SET users to mongodb
  const setUsers = async (password, email, name) => {
    const setUsers = await Users.create({
      name: name,
      email: email,
      password: password,
    });
    return setUsers;
    // res.json(setUsers);
  };

  ///// get users from mongoDB
  const getUsers = async (req, res) => {
    const showallUsers = await Users.find();
    return showallUsers;
  };
  // validated the inputs
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json({ errors: errors.array() });

  const showallUsers = await getUsers();

  const checkexsist = showallUsers.some((user) => {
    const emailMongo = user.email;
    const passwordMongo = user.password;
    return emailMongo === email && passwordMongo === password;
  });
  if (checkexsist) {
    console.log("the user is exist in system");
  } else {
    const setUserss = await setUsers(password, email, name);
    console.log("create user");
  }

  res.json({ message: "validation past!" });
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
