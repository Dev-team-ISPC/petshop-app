CREATE DATABASE petshop;

USE petshop;

CREATE TABLE usuario (
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    rol VARCHAR(50),
    telefono VARCHAR(30),
    direccion VARCHAR(200)
);

CREATE TABLE mascota (
    id_mascota INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    especie VARCHAR(50),
    raza VARCHAR(50),
    fecha_nacimiento DATE,
    peso DECIMAL(5,2),
    id_dueno INT,
    FOREIGN KEY (id_dueno) REFERENCES usuario(id_user)
);

CREATE TABLE vacuna (
    id_vacuna INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    descripcion TEXT,
    frecuencia VARCHAR(50)
);

CREATE TABLE vacunacion (
    id_vacunacion INT PRIMARY KEY AUTO_INCREMENT,
    id_mascota INT,
    id_vacuna INT,
    fecha_aplicacion DATE,
    proxima_dosis DATE,
    veterinario VARCHAR(100),
    FOREIGN KEY (id_mascota) REFERENCES mascota(id_mascota),
    FOREIGN KEY (id_vacuna) REFERENCES vacuna(id_vacuna)
);

CREATE TABLE categoria (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100)
);

CREATE TABLE producto (
    id_producto INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    precio DECIMAL(10,2),
    stock INT,
    descripcion TEXT,
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);

CREATE TABLE turno (
    id_turno INT PRIMARY KEY AUTO_INCREMENT,
    id_mascota INT,
    fecha DATE,
    motivo VARCHAR(150),
    estado VARCHAR(50),
    observaciones TEXT,
    FOREIGN KEY (id_mascota) REFERENCES mascota(id_mascota)
);