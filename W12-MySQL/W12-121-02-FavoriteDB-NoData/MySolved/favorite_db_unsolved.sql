-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --
USE favorite_db;

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  food VARCHAR(50) NOT NULL,
  -- Make an numeric column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
  song VARCHAR(100) NOT NULL,
  -- Make a string column called "artist" --
  artist VARCHAR(50),
  -- Make an integer column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id INTEGER NOT NULL AUTO_INCREMENT,
  -- Create a string column called "movie" which cannot be null --
  movie VARCHAR(50) NOT NULL,
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times BOOLEAN NOT NULL DEFAULT FALSE,
  -- Make an integer column called "score" --
  score INTEGER(10),
  -- Set the primary key of the table to id --
  PRIMARY KEY (id)
);




INSERT INTO favorite_foods (food, score) VALUES ("PIZZA", 20);
INSERT INTO favorite_foods (food, score) VALUES ("TACOS", 30);
INSERT INTO favorite_foods (food, score) VALUES ("SUSHI", 40);

INSERT INTO favorite_songs (song, artist, score) VALUES ("Travelling without Moving", "Jamiroquai", "10");
INSERT INTO favorite_songs (song, artist, score) VALUES ("Tallulah", "Jamiroquai", "9");
INSERT INTO favorite_songs (song, artist, score) VALUES ("Quiero Ver", "Cafe Tacuba", "8");


INSERT INTO favorite_movies (movie, score) VALUES ("Star Wars", 9);
INSERT INTO favorite_movies (movie, score) VALUES ("The Avengers", 9);
INSERT INTO favorite_movies (movie, score) VALUES ("Ant Man", 10);
INSERT INTO favorite_movies (movie, score) VALUES ("Fantastic Beast", 8);

SELECT * FROM favorite_foods;
SELECT * FROM favorite_songs;
SELECT * FROM favorite_movies;

UPDATE favorite_movies
SET five_times = TRUE
WHERE movie = "Star Wars";

SELECT COUNT(*) FROM favorite_movies;