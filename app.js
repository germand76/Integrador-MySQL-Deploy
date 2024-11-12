const express = require('express');
const { sequelize } = require('./src/conexion/database'); 
const contenidosRoutes = require('./src/routes/contenidosRoutes'); 
const actoresRoutes = require('./src/routes/actoresRoutes'); 

const { swaggerUi, swaggerDocs } = require('./src/utils/swaggerConfig');

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/contenidos', contenidosRoutes);
app.use('/actores', actoresRoutes);

app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

app.use((req, res, next) => {
  res.status(404).json({
    error: 'Endpoint incorrecto. Por favor verifique la URL e intente nuevamente.'
  });
});

// const PORT = 3001;
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Servidor corriendo en http://localhost:${PORT}/api-docs`);
});

