const db = require("../db");

function addDepartment() { 
// add a department 
app.post('/api/new-department', ({ body }, res) => {
  const sql = `INSERT INTO deparment (department_name)
    VALUES (?)`;
  const params = [body.department_name];
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
module.exports = addDepartment;