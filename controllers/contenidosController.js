const Contenidos = require('../models/Contenidos');
const Categorias = require('../models/Categorias');
const Actores = require('../models/Actores');
const Generos = require('../models/Generos');
const Generos_contenido = require('../models/Generos_contenido');
const Repartos = require('../models/Repartos');

const { Op } = require('sequelize');

const getTodosLosContenidos = async (req, res) => {
  try {
    const contenidos = await Contenidos.findAll({
      include: [
        {
          model: Categorias,
          attributes: ['descripcion']
        },
        {
          model: Generos,
          through: { attributes: [] }
        },
        {
          model: Actores,
          through: { attributes: [] }
        }
      ]
    });

    const formattedData = contenidos.map(contenido => ({
      id: contenido.id,
      poster: contenido.poster,
      categoria: contenido.Categoria.descripcion,
      titulo: contenido.titulo,
      gen: contenido.gen,
      generos: contenido.Generos.map(genero => `${genero.descripcion}`).join(', '),
      reparto: contenido.Actores.map(actor => `${actor.nombre} ${actor.apellido}`).join(', '),
      temporadas: contenido.temporadas,
      busqueda: contenido.busqueda,
      duracion: contenido.duracion,
      trailer: contenido.trailer,
    }));

    res.json(formattedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al recuperar los contenidos' });
  }
};


const getContenidoPorId = async (req, res) => {
  try {
    const contenido = await Contenidos.findByPk(req.params.id, {
      include: [
        {
          model: Categorias,
          attributes: ['descripcion']
        },
        {
          model: Generos,
          through: { attributes: [] }
        },
        {
          model: Actores,
          through: { attributes: [] }
        }
      ]
    });

    if (!contenido) {
      return res.status(404).json({ message: 'El id especificado no corresponde a un Contenido almacenado' });
    }

    const formattedData = {
      id: contenido.id,
      poster: contenido.poster,
      categoria: contenido.Categoria.descripcion,
      titulo: contenido.titulo,
      gen: contenido.gen,
      generos: contenido.Generos.map(genero => `${genero.descripcion}`).join(', '),
      reparto: contenido.Actores.map(actor => `${actor.nombre} ${actor.apellido}`).join(', '),
      temporadas: contenido.temporadas,
      busqueda: contenido.busqueda,
      duracion: contenido.duracion,
      trailer: contenido.trailer,
    };

    res.json(formattedData);
  } catch (error) {
      res.status(500).json({ message: 'Ocurrió un error al obtener el contenido' });
  }
}; 


const getContenidoPorTitulo = async (req, res) => {
  try {

    const { titulo } = req.params;
    const contenido = await Contenidos.findOne({ where: { titulo: { [Op.like]: `%${titulo}%` }},
      include: [
        {
          model: Categorias,
          attributes: ['descripcion']
        },
        {
          model: Generos,
          through: { attributes: [] }
        },
        {
          model: Actores,
          through: { attributes: [] }
        }
      ]
    });
   

    if (!contenido) {
      return res.status(404).json({ message: 'Contenido no encontrado' });
    }

    const formattedData = {
      id: contenido.id,
      poster: contenido.poster,
      categoria: contenido.Categoria.descripcion,
      titulo: contenido.titulo,
      gen: contenido.gen,
      generos: contenido.Generos.map(genero => `${genero.descripcion}`).join(', '),
      reparto: contenido.Actores.map(actor => `${actor.nombre} ${actor.apellido}`).join(', '),
      temporadas: contenido.temporadas,
      busqueda: contenido.busqueda,
      duracion: contenido.duracion,
      trailer: contenido.trailer,
    };

    res.json(formattedData);
  } catch (error) {
      res.status(500).json({ message: 'Ocurrió un error al obtener el contenido' });
  }
}; 


const getContenidosPorCategoria = async (req, res) => {
  try {

    const { categoria } = req.params;

    if (categoria !== 'Pelicula' && categoria !== 'Serie') {
      return res.status(400).json({ error: 'Categoría inválida. Solo se permite "Pelicula" o "Serie".' });
    }

    const contenidos = await Contenidos.findAll({
      include: [
        {
          model: Categorias,
          where: {
            descripcion: categoria
          }
        },
        {
          model: Generos,
          through: { attributes: [] }
        },
        {
          model: Actores,
          through: { attributes: [] }
        }
      ]
    });

    const formattedData = contenidos.map(contenido => ({
      id: contenido.id,
      poster: contenido.poster,
      categoria: contenido.Categoria.descripcion,
      titulo: contenido.titulo,
      gen: contenido.gen,
      generos: contenido.Generos.map(genero => `${genero.descripcion}`).join(', '),
      reparto: contenido.Actores.map(actor => `${actor.nombre} ${actor.apellido}`).join(', '),
      temporadas: contenido.temporadas,
      busqueda: contenido.busqueda,
      duracion: contenido.duracion,
      trailer: contenido.trailer,
    }));

    res.json(formattedData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener contenidos por categoría' });
  }
}; 


const crearContenido = async (req, res) => {
  try {
    const {
      poster,
      titulo,
      id_categoria,
      gen,
      resumen,
      temporadas,
      busqueda,
      duracion,
      trailer,
      generos,
      reparto
    } = req.body;

    const nuevoContenido = await Contenidos.create({
      poster,
      titulo,
      id_categoria,
      gen,
      resumen,
      temporadas,
      busqueda,
      duracion,
      trailer
    });

    if (generos && generos.length > 0) {
      await nuevoContenido.setGeneros(generos);
    }

    if (reparto && reparto.length > 0) {
      await nuevoContenido.setActores(reparto);
    }

    res.status(201).json({ message: 'Contenido creado exitosamente', data: nuevoContenido });
  } catch (error) {
      res.status(500).json({ message: 'No se pudo dar de alta el contenido' });
  }
};


const actualizarContenido = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      poster,
      titulo,
      id_categoria,
      gen,
      resumen,
      temporadas,
      busqueda,
      duracion,
      trailer,
      generos,
      reparto 
    } = req.body;

    const contenido = await Contenidos.findByPk(id);

    if (!contenido) {
      return res.status(404).json({ message: 'El id del contenido que quiere actualizar no corresponde' });
    }

    await contenido.update({
      poster,
      titulo,
      id_categoria,
      gen,
      resumen,
      temporadas,
      busqueda,
      duracion,
      trailer
    });

    if (generos) {
      await contenido.setGeneros(generos);
    }

    if (reparto) {
      await contenido.setActores(reparto);
    }

    res.status(200).json({ message: 'Contenido actualizado correctamente' });
  } catch (error) {
      res.status(500).json({ message: 'No se pudo actualizar el contenido' });
  }
};


const eliminarContenido = async (req, res) => {
  try {
    const { id } = req.params;

    //Elimino las asociaciones en las tablas intermedias, para poder borrar luego el contenido
    await Generos_contenido.destroy({ where: { id_contenido: id } });
    await Repartos.destroy({ where: { id_contenido: id } });

    const contenidoEliminado = await Contenidos.destroy({ where: { id } });

    if (contenidoEliminado) {
      res.status(200).json({ message: 'Contenido eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'El id del contenido que quiere eliminar no corresponde' });
    }
  } catch (error) {
    res.status(500).json({ message: 'No se pudo eliminar el contenido' });
  }
};


const actualizarTemporada = async (req, res) => {
  try {
    const { id } = req.params;
    const { temporadas } = req.body;

    const contenido = await Contenidos.findOne({
      where: { id },
      include: {
        model: Categorias,
        attributes: ['id', 'descripcion']
      }
    });

    if (!contenido) {
      return res.status(404).json({ error: 'El id del contenido no fue encontrado' });
    }

    if (contenido.Categoria.id !== 1) {
      return res.status(400).json({ mensaje: 'El contenido seleccionado no es una serie' });
    }

    contenido.temporadas = temporadas;
    await contenido.save();

    res.json({ mensaje: 'Temporadas actualizadas exitosamente'});
  } catch (error) {
      res.status(500).json({ error: 'Error al actualizar las temporadas' });
  }
};

module.exports = { getTodosLosContenidos, getContenidoPorId, getContenidoPorTitulo, getContenidosPorCategoria, crearContenido, actualizarContenido,  eliminarContenido, actualizarTemporada };
