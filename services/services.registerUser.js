import Users from "../model/UsersModel.js";
import { validationResult } from "express-validator";

const registerServices = async (req, res) => {
  const { password, name, email } = req.body;
  // validated the inputs
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json({ errors: errors.array() });

  //Checking  it exists in the database by email
  const existingUser = await Users.find({ email: email });
  if (existingUser.length === 0) {
    const setUsers = await Users.create({
      name: name,
      email: email,
      password: password,
    });
    res.json({ message: "create user" });
    return setUsers;
  } else {
    res.json({ message: "user is exist" });
  }
};

export { registerServices };
