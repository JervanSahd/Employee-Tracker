const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "employee_db"
});

db.connect(function (err) {
  if (err) throw err;
    else {
      // test connection
    console.log("Successfully Connected");
  }
});

module.exports = db;
