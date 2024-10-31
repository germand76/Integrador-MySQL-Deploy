const express = require('express');
const { sequelize } = require('./conexion/database'); // Conexión a la BD
const contenidosRoutes = require('./routes/contenidosRoutes'); 
const actoresRoutes = require('./routes/actoresRoutes'); 
const generosRoutes = require('./routes/generosRoutes'); 

const app = express();

app.use(express.json());

app.use('/', contenidosRoutes);
app.use('/', actoresRoutes);
app.use('/contenidos', generosRoutes);

app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

app.use((req, res, next) => {
  res.status(404).json({
    error: 'Endpoint incorrecto. Por favor verifique la URL e intente nuevamente.'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

