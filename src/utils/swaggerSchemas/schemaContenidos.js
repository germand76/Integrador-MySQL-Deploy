const contenidoSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            description: 'ID único del contenido',
        },
        poster: {
            type: 'string',
            description: 'locacion de la imagen correspondiente al contenido en cuestión',
        },
        titulo: {
            type: 'string',
            description: 'Titulo del contenido',
        },
        id_categoria: {
            type: 'integer',
            description: 'Clave foranea que vincula con la tabla Categorias. Con este atributo se establece si el contenido es una serie o una pelicula',
        },
        gen: {
            type: 'string',
            description: 'Especifica el genero principal del contenido',
        },
        resumen: {
            type: 'string',
            description: 'Resumen / Sinopsis del contenido en cuestión',
        },
        temporadas: {
            type: 'integer',
            description: 'Número de temporadas de la serie. Este campo solo contiene valor si el contenido es una serie',
        },
        busqueda: {
            type: 'string',
            description: 'Palabras claves especificadas a cerca del contenido con el cual se puede efectuar una busqueda',
        },
        duracion: {
            type: 'string',
            description: 'Duración de la pelicula. Este campo solo contiene valor si el contenido es una pelicula',
        },
        trailer: {
            type: 'string',
            description: 'Link a youtube del trailer del contenido en cuestión',
        }
    }
};

module.exports = contenidoSchema;