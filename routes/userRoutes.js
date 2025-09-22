import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserByEmail,
} from "../controllers/userControllers.js";

const router = express.Router();

router.post("/", createUser); // POST /api/users
router.get("/", getUsers); // GET /api/users
router.get("/email/:email", getUserByEmail) // GET /api/userbyemail
router.put("/:id", updateUser); // PUT /api/users/:id
router.delete("/:id", deleteUser); // DELETE /api/users/:id

export default router;
