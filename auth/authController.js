const express = require("express");
const app = express();
const { body } = require("express-validator");
const { validationResult } = require("express-validator");

const { signup } = require("./authModel");
const { conn } = require("../db");

app.post("/login", 
body("email").notEmpty(),
body("password").notEmpty(),
function(req, res) {
    if(req.headers["content-type"] !== "application/x-www-form-urlencoded") { 
        res.send("Request with wrong content-type!");
    }
    const errors = validationResult(req);
    if(!errors.isEmpty()) { 
        res.send(errors);
    }
    const sql = "select * from User where email=?;";
    conn.query(sql, req.body.email, (err, result) => { 
        if(err) { 
            console.log(err);
        } else if(result.length == 0){ 
            res.send("E-mail not found!");
        } else if(result[0].password == req.body.password) { 
            res.send("Login successful!");
        } else { 
            res.send("Wrong Credentials!");
        }
    })
});

app.post("/signup", 
body("email").notEmpty(),
body("password").notEmpty(),
signup);

module.exports = app;