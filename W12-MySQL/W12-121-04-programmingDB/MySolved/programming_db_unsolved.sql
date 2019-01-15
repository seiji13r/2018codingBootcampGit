-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
USE programming_db;

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
id INT AUTO_INCREMENT NOT NULL,

  -- Create a string column called "language" --
language VARCHAR(30) DEFAULT NULL,
  -- Create an integer column called "rating" --
rating INT(10),
  -- Create a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
mastered BOOLEAN DEFAULT TRUE,
  -- Set the id as this table's primary key
PRIMARY KEY(id)
);

-- Create new example rows
USE programming_db;

INSERT INTO programming_languages (language, rating, mastered) VALUES ("Python", 10, FALSE);
INSERT INTO programming_languages (language, rating) VALUES ("JavaScipt", 10);
INSERT INTO programming_languages (language, rating) VALUES ("C#", 8);
INSERT INTO programming_languages (language, rating) VALUES ("SWIFT", 8);

SELECT * FROM programming_languages;