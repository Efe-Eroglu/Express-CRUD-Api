import express from "express";
import { 
    createUser,
    deleteUser,
    getAllUsers,
    getSingleUser 
} from "../routes/users";

const router = exprees.Router();

router.get("/",getAllUsers);
router.get("/:id",getSingleUser);
router.get("/:id",deleteUser);
router.get("/",createUser);