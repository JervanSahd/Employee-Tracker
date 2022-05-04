const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "employee_db",
});

function questions() {
  // creates object list of questions
  prompt([
    {
      type: "list",
      message: "Choices ",
      name: "choice",
      choices: [
        "View All Departments",
        "View All Roles",
        "View all Employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit Application",
      ],
    },
  ]).then((res) => {
    let choices = res.choice;
    switch (choices) {
      case "View All Departments":
        viewAllDepartments();
        break;

      case "View All Roles":
        viewAllRoles();
        break;

      case "View all Employees":
        viewAllEmployees();
        break;

      case "Add a department":
        addDepartment();
        break;

      case "Add a role":
        // addRole(); Additional functions are needed.
        break;

      case "Add an employee":
        // addEmployee();
        break;

      case "Update an employee role":
        // updateRole();
        break;

      case "Exit Application":
        exitApp();
        break;
    }
  });
}

// View all department
function viewAllDepartments() {
  connection
    .promise()
    .query("SELECT * FROM department;")
    .then(([data]) => {
      let departments = data;
      console.log("\n");
      console.table(departments);
    })
    .then(() => questions());
}

// View all Roles
function viewAllRoles() {
  connection
    .promise()
    .query("SELECT * FROM role;")
    .then(([data]) => {
      let role = data;
      console.log("\n");
      console.table(role);
    })
    .then(() => questions());
}

// View all Employees
function viewAllEmployees() {
  connection
    .promise()
    .query("SELECT * FROM employee;")
    .then(([data]) => {
      let employee = data;
      console.log("\n");
      console.table(employee);
    })
    .then(() => questions());
}

// Exit the application
function exitApp() {
  console.log("Exiting Application");
  process.exit();
}

questions();
