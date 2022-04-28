const connection = require("./connection");


// view all departments 
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

// view all roles
app.get('/api/roles', (req, res) => {
  const sql = `SELECT id, title, salary, department AS title FROM roles`;
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

// add an employee
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

// update an employee role
app.put('/api/role/:id', (req, res) => {
  const sql = `UPDATE role SET title = ? WHERE id = ?`;
  const params = [req.body.title, req.params.id];
// Query database
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Movie not found'
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });
});





module.exports = new DB(connection);
