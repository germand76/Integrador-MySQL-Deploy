/*const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'trailerflix'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = connection;
*/


/*
const { Sequelize } = require('sequelize')

process.loadEnvFile()
const { DBUSER, PASSWORD, HOST, DATABASE } = process.env

const sequelize = new Sequelize(DATABASE, DBUSER, PASSWORD, {
  host: HOST,
  dialect: 'mysql',
})

module.exports = { sequelize }*/

require('dotenv').config();
const { Sequelize } = require('sequelize');
//process.loadEnvFile();

// Configuración de la base de datos con Sequelize y mysql2
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
    host: process.env.HOST,
    dialect: 'mysql',  
    dialectModule: require('mysql2'),  
});

// Verificar la conexión
sequelize.authenticate()
    .then(() => {
        console.log('Conexión exitosa a la base de datos MySQL');
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err);
    });

module.exports = { sequelize };
