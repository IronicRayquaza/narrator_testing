const express = require("express");
const connectDB = require("./config");
require("dotenv").config();

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
