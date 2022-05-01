const db = require("../db");
// add an employee
function addEmployee() { 
app.post('/api/new-employee', ({ body }, res) => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES (?)`;
    const params = [body.first_name, last_name, role_id, manager_id];
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
  module.exports = addEmployee;