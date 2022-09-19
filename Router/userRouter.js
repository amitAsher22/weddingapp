import express from "express";
import {
  getUsers,
  createUser,
  updateUsers,
  deleteUsers,
} from "../controllers/usersControllers";

import { auth } from '../controllers/AuthController';

const router = express.Router();

router.get("/", auth, getUsers);
router.post("/", createUser); // ???
router.put("/:id", auth, updateUsers);
router.delete("/:id", auth, deleteUsers);

export default router;
