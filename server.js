const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta para recibir la ubicación
app.post('/guardar', (req, res) => {
    const { latitud, longitud, precision } = req.body;
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] 📍 Ubicación recibida:`);
    console.log(`Latitud: ${latitud}`);
    console.log(`Longitud: ${longitud}`);
    console.log(`Precisión: ${precision} metros`);
    console.log('-----------------------------');

    res.status(200).send('Ubicación recibida correctamente');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});
