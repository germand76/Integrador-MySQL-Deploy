const express = require('express');
const { sequelize } = require('./conexion/database'); // Conexión a la BD
const contenidosRoutes = require('./routes/contenidosRoutes'); 
const actoresRoutes = require('./routes/actoresRoutes'); 

//const bodyParser = require('body-parser');
const app = express();
//const contenidoRoutes = require('./routes/contenidoRoutes');
//const db = require('./conexion/database');
//const { CLIENT_RENEG_LIMIT } = require('tls');

//process.loadEnvFile();

// Middlewares
app.use(express.json());

//app.use(bodyParser.json());


// Registrar las rutas
// app.use('/', contenidosRoutes);
app.use('/contenidos', contenidosRoutes);
//app.use(contenidosRoutes);


app.use('/actores', actoresRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});



// Servidor escuchando en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

