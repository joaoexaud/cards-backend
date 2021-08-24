const mysql = require("mysql");

const host = "localhost";
const user = "root";
const password = "abc";
const database = "cards_database";

const con = mysql.createConnection({ 
    host: host,
    user: user,
    password: password,
    database: database
});

module.exports = con;