INSERT INTO department (id, department_name)
VALUES (001, "Marketing"),
       (002, "Human Resources"),
       (003, "Information Technology"),
       (004, "Sales"),
       (005, "Customer Service");

INSERT INTO role (id, title, salary, department_id)
VALUES (01, "Beverage Dissemination Officer", 75000, 001 ),
       (02, "Chick Sexer", 60000, 002 ),
       (03, "Digital Overlord", 80000,  003),
       (04, "Retail Jedi", 120000, 004),
       (05, "Wizard of Light Bulb Moments", 40000, 005),
       (06, "Chief Chatter", 65000, 001),
       (07, "Animal Colourist ", 90000, 003);

INSERT INTO employee (id, first_name,last_name, role_id, manager_id)
VALUES (1, "Zazu", "Hornbill", 01, 1),
       (2, "Audio Science" ,"Clayton", 02, 2),
       (3, "Pilot Inspektor", "Lee",03, 3 ),
       (4, "Moxie CrimeFighter", "Jillette", 04, NULL),
       (5, "Jermajesty", "Jackson", 05, 1 ),
       (6, "Pirate Houseman", "Davis",06 ,2 ),
       (7, "Speck Wildhorse", "Mellencamp", 07, NULL ),
       (8, "North", "West", 01, 3),
       (9, "Petal Blossom", "Rainbow Oliver",02 , 1  ),
       (10, "Moon Unit", "Zappa",03, NULL );
       
