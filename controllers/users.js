import express from "express";
import { 
    getAllUsers,
    getSingleUser 
} from "../routes/users";

const router = exprees.Router();

router.get("/",getAllUsers);
router.get("/:id",getSingleUser);