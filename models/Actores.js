const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/database');
const Contenidos = require('./Contenidos');
const Repartos = require('./Repartos');

const Actores = sequelize.define('Actores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
}, {
    tableName: 'Actores',
    timestamps: false
});

Actores.belongsToMany(Contenidos, { through: Repartos, foreignKey: 'id_actor', otherKey: 'id_contenido' });
//Actores.belongsToMany(Contenidos, { through: 'Repartos', foreignKey: 'id_actor' });

//Actores.belongsToMany(Contenidos, { through: Repartos, foreignKey: 'id_actor' });

module.exports = Actores;