const express = require("express");
const app = express();
const bodyParser = require("body-parser");


const authController = require("./auth/authController");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", authController);

app.listen(8080, console.log("server is running!"));
