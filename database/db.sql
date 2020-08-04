-- creating the database
CREATE DATABASE crudlocations;

-- using the database
use crudlocations;

-- creating table

CREATE TABLE locations(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    area INT NOT NULL
);

-- show tables
SHOW TABLES;

-- describe
describe locations;