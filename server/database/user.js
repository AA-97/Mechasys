const mysql = require('mysql');

//setup connection
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

let userdb = {};

userdb.getUser = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

module.exports = userdb;