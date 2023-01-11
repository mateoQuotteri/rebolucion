CREATE DATABASE rebolucion_db;
USE rebolucion_db;


CREATE TABLE Teacher (
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);

CREATE TABLE Module (
    title VARCHAR(255) NOT NULL,
    units INT NOT NULL,
    shortDescription VARCHAR(255) NOT NULL,
    difficulty VARCHAR(255) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);

CREATE TABLE Unit (
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    video VARCHAR(255) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    id_modulo INT DEFAULT NULL,
    PRIMARY KEY (id),
    foreign key (id_modulo) references Module(id)
);
CREATE TABLE User (
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);