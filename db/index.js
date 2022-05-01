
const addDepartment = require("./func/addDepartment");
const addEmployee = require("./func/addEmployee");
const addRole = require("./func/addRole");
const updateEmployee = require("./func/updateEmployee");
const viewAllDepartment = require("./func/viewAllDepartment");
const viewAllEmployees = require("./func/viewAllEmployees");
const viewAllRoles = require("./func/viewAllRoles");

const allFunctions =
  [addDepartment,
  addEmployee,
  addRole,
  updateEmployee,
  viewAllDepartment,
  viewAllEmployees,
  viewAllRoles];

module.exports = allFunctions;
