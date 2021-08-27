const { conn } = require("../db");

function signup(req, res) { 
    const email = req.body.email;
    const password = req.body.password;
    const emailExistsQuery = "select * from User where email=?;";
    const signupQuery = "insert into User values(?,?);";

    conn.query(emailExistsQuery, email, (err, results) => { 
        if(err) {
            console.log(err);
            res.sendStatus(500);
        } else if(results.length == 0) { 
            conn.query(signupQuery, [email, password], (err, results) => {
                if(err) {
                    console.log(err);
                    res.sendStatus(500);
                } else {
                    const responseMsg = {
                        "message": "User created!",
                        "userSub": email
                    }
                    res.status(201).send(JSON.stringify(responseMsg));
                }
            });
        } else {
            res.sendStatus(400);
        }
    });
}

module.exports = { signup }