const express = require('express');
const app = express();
const contenidosRoutes = require('./routes/contenidosRoutes');
const db = require('./conexion/database');
const { CLIENT_RENEG_LIMIT } = require('tls');



// Middlewares
app.use(express.json());
app.use('/contenidos', contenidosRoutes);

// app.get('/', (req, res) => {
//   res.json('Hello World!')
// });



// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

