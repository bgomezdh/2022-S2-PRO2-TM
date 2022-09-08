USE programacion2;

/*	Cargar datos con el INSERT		*/

INSERT INTO usuarios (id_usuario, nombre, apellido, email, usuario, contrasenia, fecha_nacimiento, numero_documento, foto)
VALUES (DEFAULT, 'Brian', 'Gomez', 'bg@dh.com', 'esbrian82', '12345', '1993-03-12', '12121212', '/img/usuarios/bg.png');

/*	Cargar datos con el INSERT SIN LAS COLUMNAS	  ------------------------	*/
INSERT INTO usuarios VALUES (DEFAULT, 'Carlos', 'Andrade', 'CA@dh.com', 'carlos182', '12345', '1998-03-12', '234234', '/img/usuarios/ca.png');

/*	Warning de persistencia de datos 	*/
INSERT INTO usuarios (nombre, apellido) VALUES ('Luis', 'Navas');


INSERT INTO `programacion2`.`usuarios` (`nombre`, `apellido`, `email`, `usuario`, `contrasenia`, `fecha_nacimiento`, `numero_documento`, `foto`) VALUES ('Andrea', 'Cardona', 'as@dh.com', 'asasda182', '12345', '1995-10-10', '23423432', '/img/usuarios/ac.png');

/*	error de NULL*/

INSERT INTO usuarios (nombre, apellido, email) VALUES ('Marcos', 'Gonzalez', null);

/* UPDATE*/

UPDATE usuarios SET	contrasenia = 'lalalala' WHERE id_usuario = 2;

/* UPDATE de 2 o mas columnas*/

UPDATE usuarios SET	email = 'ln@dh.com', usuario = 'luis182'  WHERE id_usuario = 2;

/* DELETE */

DELETE FROM usuarios WHERE id_usuario = 1;

/* DELETE de varios registros*/

DELETE FROM usuarios WHERE id_usuario IN (3, 4);