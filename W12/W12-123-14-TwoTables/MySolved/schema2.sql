DROP DATABASE IF EXISTS topsongs_db;
CREATE DATABASE topsongs_db;
USE topsongs_db;


CREATE TABLE Top5000 (
rank INT NOT NULL,
artist VARCHAR (35) NOT NULL,
song VARCHAR (100) NOT NULL,
year INT(4) NOT NULL,
rawscore VARCHAR (35) NOT NULL,
usascore VARCHAR (35) NOT NULL,
ukscore VARCHAR (35) NOT NULL,
europescore VARCHAR (35) NOT NULL,
restscore VARCHAR (35) NOT NULL,
PRIMARY KEY (rank)
);

SELECT * FROM Top5000;

CREATE TABLE albums (
rank INT NOT NULL,
artist VARCHAR (35) NOT NULL,
title VARCHAR (100) NOT NULL,
year INT(4) NOT NULL,
rawscore VARCHAR (35) NOT NULL,
usascore VARCHAR (35) NOT NULL,
ukscore VARCHAR (35) NOT NULL,
europescore VARCHAR (35) NOT NULL,
restscore VARCHAR (35) NOT NULL,
PRIMARY KEY (rank)
);

SELECT * FROM albums;

SELECT top5000.rank AS song_rank, top5000.artist,top5000.song, albums.title AS album_name, top5000.year  FROM top5000
INNER JOIN albums ON top5000.artist=albums.artist WHERE (top5000.year=albums.year)&&(top5000.artist="Celine Dion");



Contraer 

13:54
:0 en serio marifer?