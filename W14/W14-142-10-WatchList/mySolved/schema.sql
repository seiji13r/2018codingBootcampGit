/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database moviePlannerDB and specified it for use.
DROP DATABASE IF EXISTS moviePlannerDB;
CREATE DATABASE moviePlannerDB;
USE moviePlannerDB;

-- Create the table plans.
CREATE TABLE movies
(
id int NOT NULL AUTO_INCREMENT,
movie varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO movies (movie) VALUES ('Sponge Bob Square Pants The Movie');
INSERT INTO movies (movie) VALUES ('The Simpsons The Movie');

SELECT * FROM movies;