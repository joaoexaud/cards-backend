const express = require("express");
const app = express();

const con = require("./db");

con.connect((err) => { 
    if(err) { 
        console.log(err);
    } else { 
        console.log("Connected to Mysql database!");
    } 
});

app.listen(8080, console.log("server is running!"));