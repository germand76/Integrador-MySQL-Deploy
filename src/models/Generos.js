const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/database');

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

module.exports = Generos;
