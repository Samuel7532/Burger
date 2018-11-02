CREATE DATABASE burgersdb;
USE burgersdb;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);