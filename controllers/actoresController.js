const Actores = require('../models/Actores');

const getTodosLosActores = async (req, res) => {
  try {
    const actores = await Actores.findAll({
      attributes: ['id', 'apellido', 'nombre']
    });

    res.json(actores);
  } catch (error) {
    console.error('Error al obtener los actores:', error);
    res.status(500).json({ message: 'Ocurrió un error al obtener los actores' });
  }
};   

const getActorPorId = async (req, res) => {
  try {
    const actor = await Actores.findByPk(req.params.id, {
      attributes: ['id', 'apellido', 'nombre']
    });
    if (!actor) {
      return res.status(404).json({ message: 'Actor no encontrado' });
    }
    res.json(actor);
  } catch (error) {
    console.error('Error al obtener el actor:', error);
    res.status(500).json({ message: 'Ocurrió un error al obtener el actor' });
  }
}; 

const crearActor = async (req, res) => {
  try {
    const { nombre, apellido } = req.body; 
    
    if (!nombre || !apellido) {
      return res.status(400).json({ error: 'El nombre y apellido son obligatorios' });
    }

    const actor = await Actores.create({ nombre, apellido });
    res.json(actor);
  } catch (error) {
    console.error('Error al crear el actor:', error);
    res.status(500).send({ error: 'No se pudo dar de alta el actor' });
  }
};

module.exports = { getTodosLosActores, getActorPorId, crearActor };