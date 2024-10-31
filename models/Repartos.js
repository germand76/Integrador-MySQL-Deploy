const { DataTypes } = require('sequelize');
const { sequelize } = require('../conexion/database');
const Actores = require('./Actores');
const Contenidos = require('./Contenidos');

const Repartos = sequelize.define('Repartos', {
    id_actor: {
        type: DataTypes.INTEGER,
        references: {
          model: Actores,
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
    tableName: 'Repartos',
    timestamps: false
  });

  module.exports = Repartos;
