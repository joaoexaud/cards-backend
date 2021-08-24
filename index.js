const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const con = require("./db");
const authControoler = require("./auth/authController");


app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", authControoler);

app.listen(8080, console.log("server is running!"));
