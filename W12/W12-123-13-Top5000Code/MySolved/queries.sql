-- First Option [Search]
SELECT * FROM topsongs_db.Top5000 WHERE artist = "Whitney Houston";
-- Second Option [Artist with more than one song]
SELECT artist , COUNT(*) as count FROM topsongs_db.Top5000 GROUP BY artist HAVING COUNT(*) > 1 ORDER BY count DESC;
-- Third Option [Songs in years range]
SELECT * FROM topsongs_db.Top5000 WHERE year BETWEEN 1982 AND 1982;
SELECT * FROM topsongs_db.Top5000 WHERE rawscore BETWEEN 30 AND 50;
-- Fourth Option  [Specific Song]
SELECT * FROM topsongs_db.Top5000 WHERE song = "Survivor";


-- Select All
SELECT * FROM topsongs_db.Top5000