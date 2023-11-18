import express from "express";
import { 
    createUser,
    deleteUser,
    getAllUsers,
    getSingleUser, 
    updateUser
} from "../routes/users";

const router = exprees.Router();

router.get("/",getAllUsers);
router.get("/:id",getSingleUser);
router.get("/:id",deleteUser);
router.get("/",createUser);
router.get("/:id",updateUser);