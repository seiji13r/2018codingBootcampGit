-- * Create a database called `playlist_db`, then create a table inside of this database called `songs`. The songs table should have four columns:

--   1. id
--   2. title
--   3. artist
--   4. genre

DROP DATABASE IF EXISTS playlist_db;
CREATE DATABASE playlist_db;
USE playlist_db;

CREATE TABLE songs (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id INTEGER NOT NULL AUTO_INCREMENT,
  -- Create a string column called "movie" which cannot be null --
  title VARCHAR(50) NOT NULL,
  artist VARCHAR(50) NOT NULL,
  genre VARCHAR(50) NOT NULL,
  -- Set the primary key of the table to id --
  PRIMARY KEY (id)
);

SELECT * FROM playlist_db.songs;

-- INSERT INTO playlist_db.songs (title, artist, genre) VALUES ("", "", "");
INSERT INTO playlist_db.songs (title, artist, genre) VALUES ("Trevelling Without Moving", "Jamiroquai", "Acid Jazz");
INSERT INTO playlist_db.songs (title, artist, genre) VALUES ("Doom And Gloom", "Rolling Stones", "Rock");
INSERT INTO playlist_db.songs (title, artist, genre) VALUES ("Las Flores", "Cafe Tacuba", "Alternative in Spanish");
INSERT INTO playlist_db.songs (title, artist, genre) VALUES ("Smells Like Teen Spirit", "Nirvana", "Rock");
INSERT INTO playlist_db.songs (title, artist, genre) VALUES ("Even flow", "Pearl Jam", "Rock");
INSERT INTO playlist_db.songs (title, artist, genre) VALUES ("Jeremy", "Pearl Jam ", "Rock");
INSERT INTO playlist_db.songs (title, artist, genre) VALUES ("Dangerous", "Michael Jackson", "Pop");
INSERT INTO playlist_db.songs (title, artist, genre) VALUES ("Genie in a Bottle", "Cristina Aguilera", "Pop");
INSERT INTO playlist_db.songs (title, artist, genre) VALUES ("Wannabe", "Spice Girls", "Pop");