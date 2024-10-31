const express = require('express');
const router = express.Router();
const { getTodosLosActores, getActorPorId, crearActor, actualizaActor, eliminarActor } = require('../controllers/actoresController'); 

router.get('/actores', getTodosLosActores);
router.get('/actores/:id', getActorPorId);
router.post('/actores', crearActor);
router.put('/actores/:id', actualizaActor);
router.delete('/actores/:id', eliminarActor);

module.exports = router;