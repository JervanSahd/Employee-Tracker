// const connection = require("./connection");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "employee_db"
});

connection.connect(function (err) {
  if (err) throw err;
});



// module.exports = new DB(connection);
module.exports = connection;