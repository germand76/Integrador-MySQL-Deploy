const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/database');

const Categorias = sequelize.define('Categorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING(40),
        allowNull: false
    }
}, {
    tableName: 'Categorias',
    timestamps: false
});

module.exports = Categorias;