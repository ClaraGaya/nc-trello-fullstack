DROP DATABASE IF EXISTS todosdb;
CREATE DATABASE todosdb;
\c todosdb;

CREATE TABLE lists (
    id SERIAL PRIMARY KEY,
    listName varchar(50) NOT NULL
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    body varchar(255) NOT NULL,
    parentListID int NOT NULL
);

INSERT INTO lists (listName)
  VALUES ('To Do'),('In progress'),('Done');

SELECT * FROM lists;
