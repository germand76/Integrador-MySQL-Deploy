const generoSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            description: 'ID único del genero',
        },
        descripcion: {
            type: 'string',
            description: 'nombre del genero',
        }
    }
};

module.exports = generoSchema;