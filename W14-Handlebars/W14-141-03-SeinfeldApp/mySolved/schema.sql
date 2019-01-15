DROP DATABASE IF EXISTS seinfeld_db;
CREATE DATABASE seinfeld_db;

USE seinfeld_db;

CREATE TABLE actors
(
  id INT AUTO_INCREMENT,
  name VARCHAR (30) NOT NULL,
  coolness_points INT (10),
  attitude VARCHAR (30),
  PRIMARY KEY (id)
);

SELECT * FROM actors;

INSERT INTO actors (name, coolness_points, attitude)
VALUES ("Jerry Seinfeld", 6, "laid back");

INSERT INTO actors (name, coolness_points, attitude)
VALUES ("George Constanza", 9, "selfish");

INSERT INTO actors (name, coolness_points, attitude)
VALUES ("Elaine Benes", 7, "righteous");

INSERT INTO actors (name, coolness_points, attitude)
VALUES ("Cosmo Kramer", 8, "dreamer");

SELECT * FROM actors;