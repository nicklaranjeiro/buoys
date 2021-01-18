DROP DATABASE IF EXISTS glosdb;
CREATE DATABASE glosdb;

\c glosdb;

-- User Table Creation
CREATE TABLE IF NOT EXISTS glos_users (
    id SERIAL UNIQUE PRIMARY KEY,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    zipcode INT(5) NOT NULL,
    favBuoys VARCHAR ARRAY[999]
);

INSERT INTO glos_users (id, email, password, zipcode, favBuoys)
VALUES 
(1, 'nicholaslaranjeiro@hotmail.com', 'pass123', 48170, {'45006', 'SPOT-0592', 'SPOT-0573'})
