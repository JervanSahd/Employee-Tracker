const db = require("../db");

function viewAllRoles() {
  // view all roles
    viewAllRoles()
      db.then(([rows]) => {
        let roles = rows;
        console.log("\n");
        console.table(roles);
      })
      .then(() => loadMainPrompts());

}
module.exports = viewAllRoles;
