const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");


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
        "All Finished",
      ],
    },
  ]).then((res) => {
    let choices = res.choice;
    switch (choices) {
      case "View All Departments":
        viewAllDepartments();

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

// View all department
function viewAllDepartments() {
  return this.db
    .query("SELECT department.id, department.name FROM department;")
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => questions());
}
