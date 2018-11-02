DROP DATABASE IF EXISTS greatbay_db;

CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE stuff (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
category VARCHAR(10) NOT NULL,
currentBid INT(10) DEFAULT 0,
PRIMARY KEY(id)
);

SELECT * FROM stuff;

INSERT INTO stuff (name, category, currentBid)
VALUES ("Smash Ultimate", "item", 500);

-- item, task, jobs, projects