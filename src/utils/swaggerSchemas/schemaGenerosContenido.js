const generosContenidoSchema = {
    type: 'object',
    properties: {
        id_contenido: {
            type: 'integer',
            description: 'ID único y clave foranea que vincula con la tabla Contenidos',
        },
        id_genero: {
            type: 'integer',
            description: 'ID único y clave foranea que vincula con la tabla Generos',
        }
    },
    required: ['id_contenido', 'id_genero']
};

module.exports = generosContenidoSchema;