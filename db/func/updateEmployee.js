const db = require("../db");

function updateEmployee() {
  // update an employee role
  app.put("/api/role/:id", (req, res) => {
    const sql = `UPDATE role SET title = ? WHERE id = ?`;
    const params = [req.body.title, req.params.id];
    // Query database
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else if (!result.affectedRows) {
        res.json({
          message: "Movie not found",
        });
      } else {
        res.json({
          message: "success",
          data: req.body,
          changes: result.affectedRows,
        });
      }
    });
  });
}
module.exports = updateEmployee;
