const mongoose = require('mongoose');
const { app, PORT } = require('./app');

// URI de conexión a MongoDB en Docker
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongo:27017/wishlist';

// Función principal asíncrona para inicializar el servidor y conectar a la BD
async function main() {
  try {
    // Conectar Mongoose a MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Conectado a MongoDB exitosamente');

    // Iniciar el servidor Express
    app.listen(PORT, () => {
      console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar la aplicación:', error.message);
    process.exit(1);
  }
}

// Ejecutar la función main
main();
