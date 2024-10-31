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
      return res.status(404).json({ message: 'El id del actor no fue encontrado' });
    }
    res.json(actor);
  } catch (error) {
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
    res.status(500).send({ error: 'No se pudo dar de alta el actor' });
  }
};


const actualizaActor = async (req, res) => {
  try {
    const { id } = req.params;
    const { apellido, nombre } = req.body;

    const [actorAActualizar] = await Actores.update({
      apellido,
      nombre
    }, 
    { where: { id } }
    )
    if (actorAActualizar === 0) {
      res.status(404).json({ message: "No se ha encontrado el Actor para actualizar sus datos" });
    }

    return res.json({ message: 'Actor actualizado correctamente' });
  } catch (error) {
      res.status(500).json({ message: 'Ocurrio un error al intentar actualizar el actor' })
  }
}; 


const eliminarActor = async (req, res) => {
  try {
    const { id } = req.params
    const actor = await Actores.findByPk(id)

    if (!actor)
      return res.status(404).json({ error: "No se ha encontrado el Actor que desea eliminar" })
  
    actor.destroy()
 
    return res.json({ message: 'Actor eliminado correctamente' });
  } catch (error) {
      res.status(500).json({ message: 'Ocurrio un error al intentar eliminar el actor' })
  }
}; 

module.exports = { getTodosLosActores, getActorPorId, crearActor, actualizaActor, eliminarActor };