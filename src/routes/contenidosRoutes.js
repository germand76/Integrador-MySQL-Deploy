const express = require('express');
const router = express.Router();
const { getTodosLosContenidos, getContenidoPorId, getContenidoPorTitulo, getContenidosPorCategoria, getContenidosPorGenero, crearContenido, actualizarContenido, eliminarContenido, actualizarTemporada } = require('../controllers/contenidosController'); 

/**
 * @swagger
 * /contenidos:
 *   get:
 *     summary: Obtener todos los contenidos
 *     description: Endpoint para obtener una lista de todos los contenidos en la base de datos.
 *     responses:
 *       200:
 *         description: Respuesta exitosa. Devuelve una lista de contenidos.
 *         content:
 *           application/json:
 *               example:
 *                 $ref: '#/components/schemas/Contenidos'
 *       404:
 *         description: No se encontraron contenidos para listar.
 *         content:
 *           application/json:
 *             example:
 *               error: No se encontraron contenidos para listar.
 *       500:
 *         description: Error en el servidor.
 *         content:
 *           application/json:
 *             example:
 *               error: Error en el servidor
 *               description: Error al recuperar los contenidos.
 */
router.get('/', getTodosLosContenidos);


/**
 * @swagger
 * /contenidos/{id}:
 *   get:
 *     summary: Obtener un contenido por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del contenido que se desea recuperar
 *     responses:
 *       200:
 *         description: Datos del contenido recuperado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contenidos'
 *       404:
 *         description: El id del contenido no fue encontrado
 *       500:
 *         description: Ocurrió un error al obtener el contenido
 */
router.get('/:id', getContenidoPorId);


/**
 * @swagger
 * /contenidos/titulo/{titulo}:
 *   get:
 *     summary: Obtener un contenido especifico por titulo
 *     parameters:
 *       - in: path
 *         name: titulo
 *         required: true
 *         schema:
 *           type: string
 *         description: titulo del contenido que se desea recuperar
 *     responses:
 *       200:
 *         description: Datos del contenido recuperado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contenidos'
 *       404:
 *         description: El titulo del contenido no fue encontrado
 *       500:
 *         description: Ocurrió un error al obtener el contenido
 */
router.get('/titulo/:titulo', getContenidoPorTitulo);


/**
 * @swagger
 * /contenidos/categoria/{categoria}:
 *   get:
 *     summary: Obtener los contenidos que corresponden según la categoria establecida
 *     parameters:
 *       - in: path
 *         name: categoria
 *         required: true
 *         schema:
 *           type: string
 *         description: categoria de los contenidos que se desean recuperar
 *     responses:
 *       200:
 *         description: Datos del contenido recuperado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contenidos'
 *       404:
 *         description: La categoria del contenido no fue encontrado
 *       500:
 *         description: Ocurrió un error al obtener los contenidos
 */
router.get('/categoria/:categoria', getContenidosPorCategoria);


/**
 * @swagger
 * /contenidos/genero/{genero}:
 *   get:
 *     summary: Obtener todos los contenidos que corresponden al genero especificado
 *     description: Obtener una lista de todos los contenidos que correspondan con el genero especificado en el endpoint.
 *     parameters:
 *       - in: path
 *         name: genero
 *         required: true
 *         schema:
 *           type: string
 *         description: El nombre del género para filtrar los contenidos
 *     responses:
 *       200:
 *         description: Respuesta exitosa. Devuelve lo contenidos que cumplen con la condición del genero seleccionado.
 *         ccontent:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contenidos'
 *       404:
 *         description: El genero especificado no esta almacenado.
 *         content:
 *           application/json:
 *             example:
 *               error: No se encontraron contenidos para listar.
 *       500:
 *         description: Error al obtener los contenidos por género.
 *         content:
 *           application/json:
 *             example:
 *               error: Error en el servidor
 *               description: Ocurrió un error al obtener los contenidos.
 */
router.get('/genero/:genero', getContenidosPorGenero);




/**
 * @swagger
 * /contenidos:
 *   post:
 *     summary: Crear un nuevo contenido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contenidos'
 *     responses:
 *       201:
 *         description: Contenido creado exitosamente
 *       500:
 *         description: Error al crear el contenido
 */
router.post('/', crearContenido);


/**
 * @swagger
 * /contenidos/{id}:
 *   put:
 *     summary: Actualizar un contenido de acuerdo al id especificado
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del contenido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contenidos'
 *     responses:
 *       200:
 *         description: El contenido se ha actualizado exitosamente
 *       404:
 *         description: El id del contenido que quiere actualizar no corresponde
 *       500:
 *         description: Error al actualizar el contenido
 */
router.put('/:id', actualizarContenido);


/**
 * @swagger
 * /contenidos/temporada/{id}:
 *   put:
 *     summary: Actualizar el numero de la temporada de una serie de acuerdo al id especificado
 *     description: La actualización se hará efectiva si la categoria del contenido corresponde a una Serie; en otro caso se indicará que no es posible
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del contenido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contenidos'
 *     responses:
 *       200:
 *         description: El numero de la temporada de la serie se ha actualizado exitosamente
 *       400:
 *         description: El contenido seleccionado no es una serie
 *       404:
 *         description: El id del contenido no fue encontrado
 *       500:
 *         description: Error al actualizar el contenido
 */
router.put('/temporada/:id', actualizarTemporada);


/**
 * @swagger
 * /contenidos/{id}:
 *   delete:
 *     summary: Eliminar un contenido de acuerdo al id especificado
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del contenido
 *     responses:
 *       204:
 *         description: Contenido eliminado correctamente
 *       404:
 *         description: El id del contenido que quiere eliminar no corresponde
 *       500:
 *         description: No se pudo eliminar el contenido
 */
router.delete('/:id', eliminarContenido);

module.exports = router;
