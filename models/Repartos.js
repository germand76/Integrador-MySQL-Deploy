const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/database');
const Contenidos = require('./Contenidos');
const Actores = require('./Actores');

const Repartos = sequelize.define('Repartos', {
    id_contenido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Contenidos,
            key: 'id'
        }
    },
    id_actor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Actores,
            key: 'id'
        }
    }
}, {
    tableName: 'Repartos',
    timestamps: false
});

//Contenidos.belongsToMany(Actores, { through: Repartos, foreignKey: 'id_contenido' });
//Actores.belongsToMany(Contenidos, { through: Repartos, foreignKey: 'id_actor' });

module.exports = Repartos;
