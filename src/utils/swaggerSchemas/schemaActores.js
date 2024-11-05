const actorSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            description: 'ID único del actor',
        },
        nombre: {
            type: 'string',
            description: 'Nombre del actor',
        },
        apellido: {
            type: 'string',
            description: 'Apellido del actor',
        }
    },
    required: ['first_name', 'last_name']
};

module.exports = actorSchema;