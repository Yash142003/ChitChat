import express from "express";
import "dotenv/config";
import cors from "cors";
import path from "path";

import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});