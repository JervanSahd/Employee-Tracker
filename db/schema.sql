DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
id INT NOT NULL PRIMARY KEY,
department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
id INT NOT NULL PRIMARY KEY ,
title VARCHAR(30) NOT NULL,-- holds role title
salary DECIMAL NOT NULL,-- Holds role salary
department_id INT NOT NULL,
FOREIGN KEY (department_id)
REFERENCES department(id)-- Hold reference to department role belongs to
ON DELETE CASCADE    
);

CREATE TABLE employee(
id INT NOT NULL PRIMARY KEY ,
first_name VARCHAR(30) NOT NULL, -- Hold employee first name
last_name VARCHAR(30) NOT NULL,-- Hold employee last name
role_id INT NOT NULL,
FOREIGN KEY (role_id) 
REFERENCES role(id)-- Hold reference to employee role
ON DELETE CASCADE,  
-- to hold reference to another employee that 
-- is the manager of the current employee (null if the employee 
-- has no manager)
manager_id INT,
FOREIGN KEY (manager_id)
REFERENCES employee(id)
ON DELETE SET NULL
);





