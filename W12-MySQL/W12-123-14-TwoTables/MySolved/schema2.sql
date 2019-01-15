DROP DATABASE IF EXISTS topsongs_db;
CREATE DATABASE topsongs_db;
USE topsongs_db;

CREATE TABLE Top5000 (
    rank INT NOT NULL,
    artist VARCHAR (100) NOT NULL,
    song VARCHAR (100) NOT NULL,
    year INT(4) NOT NULL,
    rawscore DECIMAL (10,3) NOT NULL,
    usascore DECIMAL (10,3) NOT NULL,
    ukscore DECIMAL (10,3) NOT NULL,
    europescore DECIMAL (10,3) NOT NULL,
    restscore DECIMAL (10,3) NOT NULL,
    PRIMARY KEY (rank)
);

LOAD DATA LOCAL INFILE '/Users/seijix/Google Drive/BOOTCAMP_TEC/2018codingBootcampGit/W12/W12-123-14-TwoTables/TopSongs.csv' 
INTO TABLE topsongs_db.Top5000
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n';
-- UNCOMMENT BELOW IN CASE OF HEADERS ROW
/* IGNORE 1 ROWS; */ 

SELECT * FROM topsongs_db.Top5000;

CREATE TABLE albums (
    rank INT NOT NULL,
    artist VARCHAR (100) NOT NULL,
    title VARCHAR (100) NOT NULL,
    year INT(4) NOT NULL,
    rawscore DECIMAL (10,3) NOT NULL,
    usascore DECIMAL (10,3) NOT NULL,
    ukscore DECIMAL (10,3) NOT NULL,
    europescore DECIMAL (10,3) NOT NULL,
    restscore DECIMAL (10,3) NOT NULL,
    PRIMARY KEY (rank)
);

LOAD DATA LOCAL INFILE '/Users/seijix/Google Drive/BOOTCAMP_TEC/2018codingBootcampGit/W12/W12-123-14-TwoTables/TopAlbums.csv' 
INTO TABLE topsongs_db.albums
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n';
-- UNCOMMENT BELOW IN CASE OF HEADERS ROW
/* IGNORE 1 ROWS; */ 

SELECT * FROM topsongs_db.albums;

USE topsongs_db;
SELECT Top5000.rank AS song_rank, Top5000.artist,Top5000.song, albums.title AS album_name, Top5000.year  FROM Top5000
INNER JOIN albums ON Top5000.artist=albums.artist WHERE (Top5000.year=albums.year)&&(Top5000.artist="Celine Dion");

