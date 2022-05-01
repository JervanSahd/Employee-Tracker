const db = require("../db");

function viewAllRoles() {
  // view all roles
  app.get("/api/roles", (req, res) => {
    const sql = `SELECT id, title, salary, department AS title FROM roles`;
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
module.exports = viewAllRoles;
