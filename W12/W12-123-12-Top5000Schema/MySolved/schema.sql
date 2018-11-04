DROP DATABASE IF EXISTS topsongs_db;
CREATE DATABASE topsongs_db;
USE topsongs_db;

CREATE TABLE Top5000 (
    id INT NOT NULL,
    artist VARCHAR (100) NOT NULL,
    song VARCHAR (100) NOT NULL,
    year INT(4) NOT NULL,
    rawscore DECIMAL (10,3) NOT NULL,
    usascore DECIMAL (10,3) NOT NULL,
    ukscore DECIMAL (10,3) NOT NULL,
    europescore DECIMAL (10,3) NOT NULL,
    restscore DECIMAL (10,3) NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM Top5000;