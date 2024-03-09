import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { TodoModel } from "./models/Todo.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});
const secretKey = process.env.SECRET_KEY;

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(secretKey);

app.get("/todos", async (req, res) => {
  const todos = await TodoModel.find();
  res.json();
});

app.listen(3001, () => {
  console.log("Working !!! Server started in port 3001");
});
