-- LOAD DATA INFILE 'TopSongs.csv'
-- INTO TABLE topsongs_db.Top5000
-- FIELDS TERMINATED BY ','
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\n'
-- /* IGNORE 1 ROWS; */

-- -- Error: ER_OPTION_PREVENTS_STATEMENT: The MySQL server is running with the --secure-file-priv option so it cannot execute this statement
-- SELECT @@global.secure_file_priv;

-- LOAD DATA LOCAL INFILE '/Users/seijix/Google Drive/BOOTCAMP_TEC/2018codingBootcampGit/W12/W12-123-12-Top5000Schema/MySolved/Top1000Songs.csv' 
-- INTO TABLE topsongs_db.Top5000
-- FIELDS TERMINATED BY ','
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE '/Users/seijix/Google Drive/BOOTCAMP_TEC/2018codingBootcampGit/W12/W12-123-12-Top5000Schema/MySolved/TopSongs.csv' 
INTO TABLE topsongs_db.Top5000
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n';


SELECT * FROM topsongs_db.Top5000;