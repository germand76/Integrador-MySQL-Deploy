const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/database'); // Importa la conexión

// Definir el modelo de Generos
const Generos = sequelize.define('Generos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'Generos',
    timestamps: false
});

module.exports = Generos; // Exporta correctamente el modelo
