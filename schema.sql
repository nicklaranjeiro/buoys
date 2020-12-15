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
(1, 'austinkandt@gmail.com', 'pass123', 48170, {'45006', 'SPOT-0592', 'SPOT-0573'}),
(2, 'raihan2345@gmail.com', 'test123', 48335, {'45135', 'ESF1'}),
(3, 'gpsouthmoore@gmail.com', '12345', 48003, {'ESF5', 'OMOECC_O2'});
