DROP DATABASE IF EXISTS todosdb_test;
CREATE DATABASE todosdb_test;
\c todosdb_test;

CREATE TABLE lists (
    id SERIAL PRIMARY KEY,
    listName varchar(50) NOT NULL
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    body varchar(255) NOT NULL,
    parentId int NOT NULL
);

INSERT INTO lists (listName)
  VALUES ('To Do'),('In progress'),('Done'),('Delete');

SELECT * FROM lists;
