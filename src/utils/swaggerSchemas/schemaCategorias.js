const categoriaSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            description: 'ID único de la categoria',
        },
        descripcion: {
            type: 'string',
            description: 'Nombre del categoria',
        }
    }
};

module.exports = categoriaSchema;