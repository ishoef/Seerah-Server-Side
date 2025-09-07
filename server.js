import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use("/users", userRoutes);

// Basic route
app.get("/", (req, res) => {
  res.send("Learn Seerah Server  is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});
