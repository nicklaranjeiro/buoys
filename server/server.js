"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const cors = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
};

app.use(cors);
app.use(express.json);

app.listen(port, () => {
  console.log("server started in port", port);
});