const express = require('express');
const router = express.Router();
const { getGeneros } = require('../controllers/generosController'); 

router.get('/genero/:genero', getGeneros);

module.exports = router;