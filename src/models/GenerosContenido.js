const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/database');
const Generos = require('./Generos');
const Contenidos = require('./Contenidos');

const GenerosContenido = sequelize.define('GenerosContenido', {
    id_genero: {
        type: DataTypes.INTEGER,
        references: {
            model: Generos,
            key: 'id'
        }
    },
    id_contenido: {
        type: DataTypes.INTEGER,
        references: {
            model: Contenidos,
            key: 'id'
        }
    }
}, {
    tableName: 'Generos_contenido',
    timestamps: false
});

module.exports = GenerosContenido;
