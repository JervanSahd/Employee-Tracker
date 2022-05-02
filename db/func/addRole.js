const db = require("../db");
function addRole() {
  // add a role
  return this.connection.promise().query("INSERT INTO role SET ?", role);
}
module.exports = addRole;
