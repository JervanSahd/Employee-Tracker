const inquirer = require("inquirer");
const db = require("./db");
// const allFunctions = require("../../func");
require("console.table");

inquirer // creates object list of questions
  .prompt([
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
      ],
    },
  ])
  .then(function (emp) {
    switch (emp.choices) {
      case [0]:
        // viewAllDepartments();
        
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
        addRole();
        break;

      case "Add an employee":
        addEmployee();
        break;

      case "Update an employee role":
        updateRole();
        break;
    }
  });
