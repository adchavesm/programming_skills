const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//Importando las rutas
const locationRoutes = require('./routes/locations');
const { urlencoded } = require('express');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares

app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'crudlocations'
}, 'single'))
app.use(express.urlencoded({ extended: false }));
//routes
app.use('/', locationRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Iniciando servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});