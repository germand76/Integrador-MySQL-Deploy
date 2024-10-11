const express = require('express');
const app = express();
const contenidoRoutes = require('./routes/contenidoRoutes');
const db = require('./conexion/database');
const { CLIENT_RENEG_LIMIT } = require('tls');

//process.loadEnvFile();

// Middlewares
app.use(express.json());
app.use('/contenido', contenidoRoutes);

app.get('/', (req, res) => {
  res.json('Hello World!')
});


// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

