# Employee Tracker

## Description
A command-line content management system to manage a company's employee database, using Node.js, Inquirer, and MySQL.

```md
Business owners are able to view and manage the departments, roles, and employees in their company to can organize and plan their business
```

## Criteria

```md
*   A command-line application that accepts user input

*   On load the application presents with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

*   View all departments option presents a formatted table showing department names and department ids

*   View all roles presents the job title, role id, the department that role belongs to, and the salary for that role

*   View all employees presents with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

*   Add a department prompts to enter the name of the department and that department is added to the database

*   Add a role prompts to enter the name, salary, and department for the role and that role is added to the database

*   Add an employee prompts to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

*   Update an employee role prompts to select an employee to update and their new role and this information is updated in the database 
```

## Required Packages

*   [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to your MySQL database and perform queries.

*   [Inquirer package](https://www.npmjs.com/package/inquirer) to interact with the user via the command line. 

*   [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.


## Schema:

* `department`

    * `id`: `INT PRIMARY KEY`

    * `name`: `VARCHAR(30)` to hold department name

* `role`

    * `id`: `INT PRIMARY KEY`

    * `title`: `VARCHAR(30)` to hold role title

    * `salary`: `DECIMAL` to hold role salary

    * `department_id`: `INT` to hold reference to department role belongs to

* `employee`

    * `id`: `INT PRIMARY KEY`

    * `first_name`: `VARCHAR(30)` to hold employee first name

    * `last_name`: `VARCHAR(30)` to hold employee last name

    * `role_id`: `INT` to hold reference to employee role

    * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)


## Additional Features

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.


## SOURCE

* Walkthrough video demonstrating the functionality of the application.


* GitHub repository URL
https://github.com/JervanSahd/Employee-Tracker
