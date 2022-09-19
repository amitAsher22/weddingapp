import asyncHandler from "express-async-handler";
import UsersSchem from "../model/UsersModel.js";

const getUsers = asyncHandler(async (req, res) => {
  const getusers = await UsersSchem.find();
  res.status(200).json(getusers);
});

const createUser = asyncHandler(async (req, res) => {
  const user = await UsersSchem.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  res.status(200).json(user);
});

const updateUsers = asyncHandler(async (req, res) => {
  const updateuser = await UsersSchem.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updateuser);
});

const deleteUsers = asyncHandler(async (req, res) => {
  const deleteuser = await UsersSchem.findById(req.params.id);
  await deleteuser.remove();
  res.json({ message: `delete users with id:  ${req.params.id}` });
});

export { getUsers, createUser, updateUsers, deleteUsers };
