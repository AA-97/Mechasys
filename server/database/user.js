const mysql = require("mysql");

//setup connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

let userdb = {};

// list of functions to retrieve information from database

userdb.getUsers = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM users", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

userdb.getUserById = id => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

userdb.addUser = (firstName, lastName) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "INSERT INTO users (firstName, lastName) VALUES (?,?)",
      [firstName, lastName],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

userdb.searchUser = (firstName, lastName) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM users WHERE firstName LIKE ? AND lastName LIKE ?",
      [firstName + "%", lastName + "%"],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

userdb.searchUserFirstName = firstName => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM users WHERE firstName LIKE ?",
      [firstName + "%"],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

userdb.searchUserLastName = lastName => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM users WHERE lastName LIKE ?",
      [lastName + "%"],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

module.exports = userdb;
