const Contenidos = require('../models/Contenidos');
const Categorias = require('../models/Categorias');
const Actores = require('../models/Actores');
//const Generos = require('../models/Generos');
//const Repartos = require('../models/Repartos');

/*
const getTodosLosContenidos = async (req, res) => {
  try {
    const contenidos = await Contenidos.findAll({
      attributes: ['id', 'gen', 'titulo', 'poster', 'trailer'],
      include: [
      {
        model: Actores,
        attributes: ['nombre', 'apellido'],
        through: { attributes: [] } 
      },
      {
        model: Categorias,
        attributes: ['descripcion']
      }
      ]
    });

    const response = contenidos.map(contenido => ({
      id: contenido.id,
      categoria: contenido.Categoria.descripcion,
      poster: contenido.poster,
      titulo: contenido.titulo,
      Gen: contenido.gen,
      trailer: contenido.trailer,
      reparto: contenido.Actores.map(actor => `${actor.nombre} ${actor.apellido}`).join(', ')
    }));

    res.json(response);
  } catch (error) {
    console.error('Error al obtener los contenidos:', error);
    res.status(500).json({ message: 'Ocurrió un error al obtener los contenidos' });
  }
};
*/

const getTodosLosContenidos = async (req, res) => {
  try {
    const contenidos = await Contenidos.findAll({
      include: [{
        model: Actores,
        through: { attributes: [] }, // Esto evita que se incluyan los atributos de la tabla intermedia
        attributes: ['nombre', 'apellido']
      }]
    });

    const formattedContenidos = contenidos.map(contenido => ({
      id: contenido.id,
      titulo: contenido.titulo,
      poster: contenido.poster,
      reparto: contenido.Actores.map(actor => `${actor.nombre} ${actor.apellido}`).join(', '),
      trailer: contenido.trailer
    }));

    res.json(formattedContenidos);
  } catch (error) {
    console.error('Error al obtener los contenidos:', error);
    res.status(500).json({ message: 'Error al obtener los contenidos' });
  }
};

module.exports = { getTodosLosContenidos };
