const db = require("../db");
function viewAllDepartments() {
  db.viewAllDepartment()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => loadMainPrompts());
}

module.exports = viewAllDepartments;
