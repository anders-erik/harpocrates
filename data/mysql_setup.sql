
------------------------------------
-- START COMMAND:
-- $ sudo mysql < mysql_setup.sql


-- SET UP USER AND CREATE DATABASE USING SUDO

drop USER chains;
CREATE USER 'chains' IDENTIFIED BY 'chains123';
DROP DATABASE IF EXISTS chainsDB;
CREATE DATABASE chainsDB;
GRANT ALL PRIVILEGES ON chainsDB.* TO chains;
quit;




$ mysql -u chains -p chainsDB < mysql_setup.sql




-- CREATE USER 'chains' IDENTIFIED BY 'chains123';


-- DROP TABLE IF EXISTS chats;
CREATE TABLE chats (
  `chatID` int(11) NOT NULL,
  `chatName` varchar(50) NOT NULL,
  PRIMARY KEY (`chatID`)
);

INSERT INTO chats VALUES (1, 'First chat');
INSERT INTO chats VALUES (2, 'Second chat');
