const express = require('express');
const path = require('path');

const app = express();

// Configurar el puerto
const PORT = process.env.PORT || 3000;

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Declarar la carpeta public como estática
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Exportar la aplicación y el puerto para uso en index.js
module.exports = { app, PORT };
