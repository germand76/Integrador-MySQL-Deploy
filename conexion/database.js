require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
    host: process.env.HOST,
    dialect: 'mysql',  
    dialectModule: require('mysql2'),  
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexión exitosa a la base de datos');
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err);
    });

module.exports = { sequelize };
