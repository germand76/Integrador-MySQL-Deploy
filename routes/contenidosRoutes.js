const express = require('express');
const router = express.Router();
const { getTodosLosContenidos, getContenidoPorId, getContenidoPorTitulo, getContenidosPorCategoria, crearContenido, actualizarContenido, eliminarContenido, actualizarTemporada } = require('../controllers/contenidosController'); 

router.get('/contenidos', getTodosLosContenidos);
router.get('/contenidos/:id', getContenidoPorId);
router.get('/contenidos/titulo/:titulo', getContenidoPorTitulo);
router.get('/contenidos/categoria/:categoria', getContenidosPorCategoria);
router.post('/contenidos', crearContenido);
router.put('/contenidos/:id', actualizarContenido);
router.delete('/contenidos/:id', eliminarContenido);
router.put('/contenidos/temporada/:id', actualizarTemporada);

module.exports = router;
