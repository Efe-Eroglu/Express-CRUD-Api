import express from "express";

import {
  createUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;