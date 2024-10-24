const express = require('express');
const router = express.Router();
const { getTodosLosContenidos } = require('../controllers/contenidosController'); 

// Definir la ruta GET /contenidos
// router.get('/contenidos', getTodosLosContenidos);
router.get('/', getTodosLosContenidos);

module.exports = router;
