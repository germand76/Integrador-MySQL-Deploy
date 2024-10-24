const express = require('express');
const router = express.Router();
const { getTodosLosActores, getActorPorId, crearActor } = require('../controllers/actoresController'); 

router.get('/', getTodosLosActores);
router.get('/:id', getActorPorId);
router.post('/', crearActor);

module.exports = router;