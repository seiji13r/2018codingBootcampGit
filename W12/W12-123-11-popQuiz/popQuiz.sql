/* # Node + MySQL PopQuiz

## Using the `terminal` or your favorite MySQL GUI
1. Connect to MySQL server 
2. Create a new Database
3. Create a new table with a primary key that auto-increments, and a text field
4. Insert 3 Rows into your new table

## Using Node / IDE of your choice
1. Create a package.json
2. Require `mysql`
3. Connect to MySQL
4. Print the 3 rows of data to the `console` */

DROP DATABASE IF EXISTS quiz;
CREATE DATABASE quiz;
USE quiz;

CREATE TABLE table_quiz (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) UNIQUE NO NULL,
PRIMARY KEY(id)
)

SELECT * FROM table_quiz;

/* INSERT INTO table_quiz (name) VALUES ("Hello");
INSERT INTO table_quiz (name) VALUES ("Bye");
INSERT INTO table_quiz (name) VALUES ("Sayounara"); */

/* SELECT * FROM table_quiz; */