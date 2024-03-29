const express = require('express');
const router = express.Router();
const Libro = require('../models/Libro');

router.get('/',async (req,res)=>{
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error) {
        res.status(500).json({error: "Error al intentar traer un libro" });
    }
});

router.post('/', async (req,res)=>{
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.json(nuevoLibro);
    } catch (error) {
        res.status(500).json({error: "Error al intentar agregar un libro" });
    }
});

router.put('/:id', async (req,res)=>{
    try {
        await Libro.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        })
        res.json("Libro modificado exitosamente");
    } catch (error) {
        res.status(500).json({error: "Error al intentar actualizar el libro "});
    }
});

router.delete('/:id', async (req,res) => {
   try {
    await Libro.findByIdAndDelete(req.params.id);
    res.json("Libro eliminado");
   } catch (error) {
    res.status(500).json({error: "Error al intentar eliminar el libro "});
   }
});

module.exports = router;