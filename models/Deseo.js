const mongoose = require('mongoose');

// Schema para los deseos en la lista de deseos
const deseoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  precio: {
    type: Number,
    required: true,
    min: 0,
  },
  descripcion: {
    type: String,
    trim: true,
    maxlength: 500,
  },
  imagenes: {
    type: [String],
    default: [],
  },
  prioridad: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'Media',
  },
  completado: {
    type: Boolean,
    default: false,
  },
  fechaCreada: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

// Crear y exportar el modelo de Mongoose
module.exports = mongoose.model('Deseo', deseoSchema);
