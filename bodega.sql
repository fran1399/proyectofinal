create database bodega;
use bodega;
create table compras (
idCompra int unsigned not null auto_increment,
vino varchar(50) not null,
cantidad int not null,
descripcion varchar(200) not null,
primary key(idCompra)
)
create table contacto (
idContacto int unsigned not null auto_increment,
nombre varchar(50) not null,
email varchar(50) not null,
primary key(idContacto)
)

