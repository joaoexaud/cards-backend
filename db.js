const mysql = require("mysql");

const host = "localhost";
const user = "root";
const password = "abc";
const database = "cards_database";

const conn = mysql.createConnection({ 
    host: host,
    user: user,
    password: password,
    database: database
});

conn.connect((err) => { 
    if(err) { 
        console.log(err);
    } else { 
        console.log("Connected to Mysql database!");
    } 
});

module.exports = { conn };