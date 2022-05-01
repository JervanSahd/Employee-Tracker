const db = require("../db");

function addRole() { 
// add a role
app.post('/api/new-role', ({ body }, res) => {
    const sql = `INSERT INTO roles (title,salary,department_id,)
      VALUES (?)`;
    const params = [body.title, body.salary, body.department_id];
    // Query database
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });
}
  module.exports = addRole;