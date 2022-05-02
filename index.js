const inquirer = require("inquirer");
const db = require("./db");
const cTable = require("console.table");

function questions() {
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
          "All Finished",
        ],
      },
    ])
    .then((res) => {
      let choices = res.choice;
      switch (choices) {
        case [0]:
          db.viewAllDepartment();

          break;

        case [1]:
          // viewAllRoles();
          break;

        case [2]:
          // viewAllEmployees();
          break;

        case [3]:
          // addDepartment();
          break;

        case [4]:
          // addRole();
          break;

        case [5]:
          // addEmployee();
          break;

        case [6]:
          // updateRole();
          break;

        case [7]:
          // endStatement();
          break;
      }
    });
}
