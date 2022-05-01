const db = require("../db");

function viewAllDepartments() {
  // view all departments
  app.get("/api/departments", (req, res) => {
    const sql = `SELECT id, department_name AS Department FROM department`;
    // Query database
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: rows,
      });
    });
  });
}
module.exports = viewAllDepartments;
