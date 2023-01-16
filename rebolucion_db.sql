CREATE DATABASE rebolucion_db;
USE rebolucion_db;


CREATE TABLE teachers (
    email VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);

CREATE TABLE modules (
    title VARCHAR(100) NOT NULL,
    units INT NOT NULL,
    shortDescription VARCHAR(255) NOT NULL,
    difficulty VARCHAR(255) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);
CREATE TABLE units (
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    video VARCHAR(255) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    id_modulo INT DEFAULT NULL,
    PRIMARY KEY (id),
    foreign key (id_modulo) references Module(id)
);
CREATE TABLE users (
    email VARCHAR(100) NOT NULL,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    phone INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);
