// view all employees
app.get('/api/employees', (req, res) => {
  const sql = `SELECT id, first_name,last_name, role_id, manager_id AS employee FROM employees`;
  // Query database
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

function viewAllEmployees() {
  app.get('/api/departments', (req, res) => {
const sql = `SELECT id, department_name AS Department FROM department`;
// Query database
db.query(sql, (err, rows) => {
  if (err) {
    res.status(500).json({ error: err.message });
     return;
  }
  res.json({
    message: 'success',
    data: rows
  });
});
});
}
module.exports = viewAllEmployees;