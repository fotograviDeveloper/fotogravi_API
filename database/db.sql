--crando la base de datos 

CREATE TABLE fotograviData;

USE fotograviData ;



CREATE TABLE IF NOT EXISTS email (
    id INT(6)UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50),
    email VARCHAR(60) NOT NULL ,
    asunto INT(15) not NULL,
    mensaje text (500) NOT NULL
);


ALTER TABLE email
ADD PRIMARY key (id);