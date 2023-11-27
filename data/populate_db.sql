
/*
-- waiting with users
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  `userID` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  PRIMARY KEY (`userID`)
);

INSERT INTO users VALUES (1, 'user1');
INSERT INTO users VALUES (2, 'user2');
*/

DROP TABLE IF EXISTS chats;
CREATE TABLE chats (
  `chatID` int NOT NULL AUTO_INCREMENT,
  `chatName` varchar(50) NOT NULL,
  PRIMARY KEY (`chatID`)
);

INSERT INTO chats VALUES (0, 'First chat');
INSERT INTO chats VALUES (0, 'Second chat');


DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
  `messageID` int NOT NULL AUTO_INCREMENT,
  `messageText` varchar(255) NOT NULL,
  `chatID` int(10) NOT NULL,
  PRIMARY KEY (`messageID`),
  FOREIGN KEY (`chatID`) REFERENCES chats(`chatID`)
);

INSERT INTO messages VALUES (0, 'user1:: The first message ever on Chains! <br> 2023-08-02T1401+0000', 1);
INSERT INTO messages VALUES (0, 'user1:: Second message! <br> 2023-08-02T1448+0000', 1);









-- CHECK WHEN TABLE WAS LAST UPDATED
SELECT UPDATE_TIME
FROM   information_schema.tables
WHERE  TABLE_SCHEMA = 'chainsDB'
   AND TABLE_NAME = 'chats';
