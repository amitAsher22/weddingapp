import express from "express";
import {
  getUsers,
  settUsers,
  updateUsers,
  deleteUsers,
} from "../controllers/usersControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", settUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

export default router;
