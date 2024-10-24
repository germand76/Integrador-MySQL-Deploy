const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/database');

// Definir el modelo intermedio Generos_contenido
const Generos_contenido = sequelize.define('Generos_contenido', {
    id_genero: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Generos',
            key: 'id'
        }
    },
    id_contenido: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Contenidos',
            key: 'id'
        }
    }
}, {
    tableName: 'Generos_contenido',
    timestamps: false
});

module.exports = Generos_contenido;
