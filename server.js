const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config();

const app = express();

connectDB();
// middleware global
app.use(express.json());
// router
app.use("/api/user", require("./router/user"));

const PORT = process.env.PORT;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log("server is running")
);
