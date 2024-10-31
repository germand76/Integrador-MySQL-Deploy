const Contenidos = require('../models/Contenidos');
const Categorias = require('../models/Categorias');
const Actores = require('../models/Actores');
const Generos = require('../models/Generos');

const { Op } = require('sequelize');

const getGeneros = async (req, res) => {
  try {
      const { genero } = req.params;
  
      const generoEncontrado = await Generos.findOne({
        where: { descripcion: genero }
      });
  
      if (!generoEncontrado) {
        return res.status(404).json({ error: 'El genero especificado no esta almacenado' });
      }
  
      const contenidos = await Contenidos.findAll({
        include: [
          {
            model: Generos,
            through: { attributes: [] }
          },
          {
            model: Actores,
            through: { attributes: [] }
          },
          {
            model: Categorias,
            attributes: ['descripcion']
          }
        ]
      });
  
      const resultados = contenidos
        .filter(contenido => contenido.Generos.some(g => g.descripcion === genero))
        .map((contenido) => {
          const generos = contenido.Generos.map(g => g.descripcion).join(', ');
          const reparto = contenido.Actores.map(actor => `${actor.nombre} ${actor.apellido}`).join(', ');
          
          return {
            id: contenido.id,
            poster: contenido.poster,
            categoria: contenido.Categoria.descripcion,
            titulo: contenido.titulo,
            gen: contenido.gen,
            generos: generos, 
            reparto: reparto,
            temporadas: contenido.temporadas,
            busqueda: contenido.busqueda,
            duracion: contenido.duracion || "NULL",
            trailer: contenido.trailer
          };
        });
  
      res.json(resultados);
    } catch (error) {
      console.error("Error al obtener contenidos por género:", error);
      res.status(500).json({ error: 'Error al obtener los contenidos' });
    }
};

module.exports = { getGeneros };