const db = require("../db");
function viewAllDepartments() {
  db.query(
    "SELECT department.id, department.name FROM department",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      questions();
    }
  );
}

module.exports = viewAllDepartments;
