

DROP USER IF EXISTS harpocrates;
CREATE USER harpocrates IDENTIFIED BY 'harpocrates123';
DROP DATABASE IF EXISTS harpocratesDB;
CREATE DATABASE harpocratesDB;
GRANT ALL PRIVILEGES ON harpocratesDB.* TO harpocrates;

