-- * Create a database called `playlist_db`, then create a table inside of this database called `songs`. The songs table should have four columns:

--   1. id
--   2. title
--   3. artist
--   4. genre

DROP DATABASE IF EXISTS topsongs_db;
CREATE DATABASE topsongs_db;
USE topsongs_db;


CREATE TABLE Top5000 (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR (35) NOT NULL,
rawscore VARCHAR (35) NOT NULL,
usascore VARCHAR (35) NOT NULL,
ukscore VARCHAR (35) NOT NULL,
europescore VARCHAR (35) NOT NULL,
restscore VARCHAR (35) NOT NULL,
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