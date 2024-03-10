const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/biblioteca");

// Descontinuadas a partir de la version 4.0.0 de node.
// useUnifiedTopology: true,
// useNewUrlParser: true,

const LibroSchema = new mongoose.Schema({
    titulo: String,
    autor: String
},{conection: 'libros'});

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;