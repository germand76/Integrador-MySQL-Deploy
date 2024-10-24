const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/database');
const Categorias = require('./Categorias');
const Actores = require('./Actores');
//const Generos = require('./Generos');
const Repartos = require('./Repartos');

// Definir el modelo de Contenidos
const Contenidos = sequelize.define('Contenidos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    poster: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        references: {
            model: Categorias,
            key: 'id'
        }
    },
    gen: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    resumen: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    temporadas: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    busqueda: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    duracion: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    trailer: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'Contenidos',
    timestamps: false
});


Contenidos.belongsTo(Categorias, { foreignKey: 'id_categoria'});

Contenidos.belongsToMany(Actores, { through: Repartos, foreignKey: 'id_contenido', otherKey: 'id_actor' });

module.exports = Contenidos;