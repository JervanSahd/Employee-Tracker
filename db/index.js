const connection = require("./connection");
const connection = require("./func/addDepartment");
const connection = require("./func/addEmployee");
const connection = require("./func/addRole");
const connection = require("./func/updateEmployee");
const connection = require("./func/viewAllDepartment");
const connection = require("./func/viewAllEmployees");
const connection = require("./func/viewAllRoles");




module.exports = new DB(connection);
