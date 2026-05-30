const express = require('express');
const router = express.Router();
const Deseo = require('../models/Deseo');

// Ruta GET principal
router.get('/', async (req, res) => {
    try {
        const deseos = await Deseo.find();

        res.render('index', { deseos });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Ruta POST para agregar nuevos deseos
router.post('/agregar', async (req, res) => {
    try {

        const { nombre, precio, descripcion, prioridad } = req.body;

        const nuevoDeseo = new Deseo({
            nombre,
            precio,
            descripcion,
            prioridad,
        });

        await nuevoDeseo.save();
        res.redirect('/');

    } catch (error) {
        console.error(error);

        res.status(500).send(error.message);
    }
});

router.post('/eliminar/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await Deseo.findByIdAndDelete(id);

        res.redirect('/');
    } catch (error) {
        console.error(error);

        res.status(500).send('Error al eliminar el deseo');
    }
});

module.exports = router;