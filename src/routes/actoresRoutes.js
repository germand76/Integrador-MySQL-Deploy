const express = require('express');
const router = express.Router();
const { getTodosLosActores, getActorPorId, crearActor, actualizaActor, eliminarActor } = require('../controllers/actoresController'); 


/**
 * @swagger
 * /actores:
 *   get:
 *     summary: Obtener todos los actores
 *     description: Endpoint para obtener una lista de todos los actores en la base de datos.
 *     responses:
 *       200:
 *         description: Respuesta exitosa. Devuelve una lista de actores.
 *         content:
 *           application/json:
 *               example:
 *                 $ref: '#/components/schemas/Actores'
 *       404:
 *         description: No se encontraron actores para listar.
 *         content:
 *           application/json:
 *             example:
 *               error: No se encontraron actores para listar.
 *       500:
 *         description: Error en el servidor.
 *         content:
 *           application/json:
 *             example:
 *               error: Error en el servidor
 *               description: Ocurrió un error al obtener los actores.
 */
router.get('/', getTodosLosActores);


/**
 * @swagger
 * /actores/{id}:
 *   get:
 *     summary: Obtener un actor por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del actor que se desea recuperar
 *     responses:
 *       200:
 *         description: Datos del actor recuperado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Actores'
 *       404:
 *         description: El id del actor no fue encontrado
 *       500:
 *         description: Ocurrió un error al obtener el actor
 */
router.get('/:id', getActorPorId);


/**
 * @swagger
 * /actores:
 *   post:
 *     summary: Crear un nuevo actor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Actores'
 *     responses:
 *       201:
 *         description: Actor creado exitosamente
 *       400:
 *         description: El nombre y apellido son obligatorios 
 *       500:
 *         description: Error al crear el actor
 */
router.post('/', crearActor);

/**
 * @swagger
 * /actores/{id}:
 *   put:
 *     summary: Actualizar datos de un actor
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del actor que se desea actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Actores'
 *     responses:
 *       200:
 *         description: Actor actualizado exitosamente
 *       404:
 *         description: No se ha encontrado el Actor para actualizar sus datos
 *       500:
 *         description: Ocurrio un error al intentar actualizar el actor
 */
router.put('/:id', actualizaActor);

/**
 * @swagger
 * /actores/{id}:
 *   delete:
 *     summary: Eliminar un actor
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del actor que se desea eliminar
 *     responses:
 *       204:
 *         description: Actor eliminado correctamente
 *       404:
 *         description: No se ha encontrado el Actor que desea eliminar
 *       500:
 *         description: Ocurrio un error al intentar eliminar el actor
 */
router.delete('/:id', eliminarActor);

module.exports = router;