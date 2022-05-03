const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

questions();

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

// function viewAllDepartments() {
//   db.viewAllDepartments(
//     "SELECT department.id, department.name FROM department",
//     function (err, res) {
//       if (err) throw err;
//       console.table(res);
//     }
//   );
// }
function viewAllDepartments() {
  db.viewAllDepartment()
    .then(([rows]) => {
      let department = rows;
      console.log("\n");
      console.table(department);
    })
    .then(() => questions());
}
