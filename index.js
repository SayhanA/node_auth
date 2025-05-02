import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
dotenv.config();
// import cors from "cors";

const port = process.env.PORT || 8000;
const app = express();


app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use((req, res, next) => {s
  res.send("<h1>Hello world</h1>");
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on : http://localhost:${port}`);
});
