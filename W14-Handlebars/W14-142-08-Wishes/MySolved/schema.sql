/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database wishes_db and specified it for use.
DROP IF EXISTS DATABASE wishes_db;
CREATE DATABASE wishes_db;
USE wishes_db;

-- Create the table tasks.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('A Bicycle');
INSERT INTO wishes (wish) VALUES ('A Puppy');
INSERT INTO wishes (wish) VALUES ('A Six Pack');


SELECT * FROM wishes;