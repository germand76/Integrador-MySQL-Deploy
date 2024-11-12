const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const actorSchema = require('./swaggerSchemas/schemaActores');
const contenidoSchema = require('./swaggerSchemas/schemaContenidos');
const categoriaSchema = require('./swaggerSchemas/schemaCategorias');
const generosSchema = require('./swaggerSchemas/schemaGeneros');
const generosContenidoSchema = require('./swaggerSchemas/schemaGenerosContenido');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Proyecto Integrador: CRUD con Node.js y MySQL',
      version: '1.0.0',
      description: 'Documentación generada con Swagger para presentación del proyecto integrador correspondiente a los temas relacionados con CRUD con Node.js y MySQL',
    },
    basePath: '/src',
    servers: [
      {
        url: 'http://localhost:3001',
      },
      {
        url: 'https://integrador-mysql-deploy-production.up.railway.app',
      }
    ],
    components: {
      schemas: {
        Actores: actorSchema,
        Contenidos: contenidoSchema,
        Categorias: categoriaSchema,
        Generos: generosSchema,
        GenerosContenido: generosContenidoSchema
      },
    },
  },
  apis: ['./src/routes/*.js']
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)

module.exports = { swaggerDocs, swaggerUi }