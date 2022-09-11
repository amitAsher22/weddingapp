import asyncHandler from "express-async-handler";
import UsersSchem from "../model/UsersModel.js";

const getUsers = asyncHandler(async (req, res) => {
  const getusers = await UsersSchem.find();

  res.json(getusers);
});
const settUsers = asyncHandler(async (req, res) => {
  const setUsers = await UsersSchem.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  res.json(setUsers);
});

const updateUsers = asyncHandler(async (req, res) => {
  const updateUser = await UsersSchem.findById(req.params.id);

  // if (!updateUser) {
  //   res.status(400);
  //   throw new Error("Goal not found");
  // }
  const updateuser = await UsersSchem.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.json(updateuser);
});

const deleteUsers = asyncHandler(async (req, res) => {
  const deleteuser = await UsersSchem.findById(req.params.id);

  await deleteuser.remove();

  res.json({ message: `delete users with id:  ${req.params.id}` });
});

export { getUsers, settUsers, updateUsers, deleteUsers };
