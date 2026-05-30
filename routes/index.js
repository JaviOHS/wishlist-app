const express = require('express');
const router = express.Router();
const Deseo = require('../models/Deseo');

// Ruta GET principal
router.get('/', async (req, res) => {
    try {
        const q = (req.query.q || '').trim();
        const estado = req.query.estado || 'todos';
        const prioridad = req.query.prioridad || 'todas';
        const orden = req.query.orden || 'fecha_desc';

        const filtros = {};

        if (q) {
            filtros.$or = [
                { nombre: { $regex: q, $options: 'i' } },
                { descripcion: { $regex: q, $options: 'i' } },
            ];
        }

        if (estado === 'pendiente') filtros.completado = false;
        if (estado === 'completado') filtros.completado = true;

        if (prioridad !== 'todas') {
            filtros.prioridad = { $regex: `^${prioridad}$`, $options: 'i' };
        }

        const sortMap = {
            fecha_desc: { completado: 1, fechaCreada: -1 },
            fecha_asc: { completado: 1, fechaCreada: 1 },
            precio_asc: { completado: 1, precio: 1 },
            precio_desc: { completado: 1, precio: -1 },
        };

        const sort = sortMap[orden] || sortMap.fecha_desc;
        const deseos = await Deseo.find(filtros).sort(sort);

        const filtrosUI = { q, estado, prioridad, orden };

        res.render('index', { deseos, filtros: filtrosUI });
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

// Ruta POST para actualizar un deseo existente
router.post('/editar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, precio, descripcion, prioridad } = req.body;

        const deseo = await Deseo.findById(id);
        if (!deseo) return res.status(404).send('Deseo no encontrado');
        if (deseo.completado) return res.status(403).send('No se puede editar un deseo completado');

        deseo.nombre = nombre;
        deseo.precio = precio;
        deseo.descripcion = descripcion;
        deseo.prioridad = prioridad;

        await deseo.save();
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el deseo');
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

// Ruta POST para alternar el estado completado/pendiente
router.post('/completar/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deseo = await Deseo.findById(id);
        if (!deseo) return res.status(404).send('Deseo no encontrado');

        deseo.completado = !deseo.completado;
        await deseo.save();

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el estado');
    }
});

module.exports = router;