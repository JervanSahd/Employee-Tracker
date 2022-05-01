const viewAllDepartments = require("./viewAllDepartment");

function addDepartment() { 

  inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "What Department would you like to add?"
      }
  ]).then(function(res) {
      var query = connection.query(
          "INSERT INTO department SET ? ",
          {
            name: res.name
          
          },
          function(err) {
              if (err) throw err
              console.table(res);
              startPrompt();
          }
      )
  })
}
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
module.exports = viewAllDepartments;