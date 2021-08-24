const express = require("express");
const app = express();

const { conn } = require("../db");

app.post("/login", (req, res) => { 
    console.log(req.body);
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

module.exports = app;