const { sequelize } = require('../conexion/database');
const { DataTypes } = require('sequelize');

const Actores = sequelize.define(
    'Actores',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING(30),
            allowNull: false,
        }
    },
    {
        tableName: 'Actores',
        timestamps: false,
    }
);

module.exports = { Actores };
