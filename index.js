const express = require('express');
const app = express();
const mysql = require('mysql2');
//Motor de plantilla
const hbs = require('hbs');
//Encontrar archivo
const path = require('path');
//Para enviar mails a los clientes
const nodemailer = require('nodemailer');
const { link, linkSync } = require('fs');
//Variables de entorno
require('dotenv').config();

//Configuramos el puerto
const PORT = process.env.PORT || 9000;

console.log(PORT);

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

//Configuramos el motor de plantillas de HBS
app.set('view engine', 'hbs');
//Configuramos la configuracion de las plantillas
app.set('views', path.join(__dirname, 'views'));
//Configuramos los parciales de los motores de las plantillas
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//Conexion a la base de datos
/* const conexion =mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT
}); 

conexion.connect((err) => {
    if(err) throw err;
    console.log(`Conectado a la Database ${process.env.database}`);
});    */

//Rutas de la aplicacion
app.get('/', (req, res) => {
    res.render('index', {
        })
})

app.get('/index', (req, res) => {
    res.render('index', {
        })
}) 

app.get('/nosotros', (req, res) => {
    res.render('nosotros', {
        })
})

app.get('/vinos', (req, res) => {
    res.render('vinos', {
        })
})

app.get('/compras', (req, res) => {
    res.render('compras', {
    })

        /* let sql = "SELECT * FROM ventas";
        conexion.query(sql, function(err, result){
            if (err) throw err;
                console.log(result);
                res.render('compras', {
                    datos: result
                })
        })   */
})

app.post('/compras', (req, res) => {
    /* console.log(req);

    const vino = req.body.vino;
    const cantidad = req.body.cantidad;
    const aclaracion = req.body.aclaracion;

    let datos = {
        vino: vino,
        cantidad: cantidad,
        aclaracion: aclaracion
    }

    let sql = "INSERT INTO ventas set ?";
            conexion.query(sql, datos, function(err){
            if (err) throw err;
                console.log(`1 registro insertado`);
                res.redirect('/compras') //Es la página a donde se va a enviar al cliente después de que envíe los datos//
        })  */

        res.render('compras') 
})

app.post('/delete', (req, res) => {

    console.log(req.body.idVenta);

    /* let sql = "DELETE FROM ventas where idVenta = " + req.body.idVenta + "";
    console.log(sql);
    conexion.query(sql, function(err, result){
        if (err) throw err;
            console.log('Datos eliminados: ' + result.affectedRows);
            res.render('compras')
    })    */

    res.json({
        prueba: 'Probando deploy sin conexion a la Database'
    })  
})

app.post('/update', (req, res) => {

    const vino = req.body.vino;
    const cantidad = req.body.cantidad;
    const aclaracion = req.body.aclaracion;
    const idVenta = req.body.idVenta;

    /* let sql = "UPDATE ventas SET vino = '" 
    + vino 
    + "', cantidad = '" 
    + cantidad 
    + "', aclaracion = '" 
    + aclaracion 
    + "' WHERE idVenta = " 
    + idVenta;
    console.log(sql);
    conexion.query(sql, function(err, result){
        if (err) throw err;
            console.log('Datos actualizados: ' + result.affectedRows); 
            res.render('compras')
    })   */
})

//Servidor a la escucha de las peticiones
app.listen(PORT, ()=>{
    console.log(`Servidor trabajando en el puerto: ${PORT}`);
    });
    