// Se implementa el enrutador de Express
// const router = require('express').Router();

const { Router } = require('express');
const { crearPublicacion, obtenerPublicaciones, actualizarPublicacion, eliminarPublicacion   } = require('../controller/blog.controller');
const router = Router()

// ==================================================
//         Rutas para renderizar vistas
// ==================================================


router.get('/home', (req, res) => {
    res.render("index")
})

// Ruta para devolver la vista admin
router.get('/admin', (req, res)=> {
    res.render('admin')
})


// ==================================================
//         Rutas para CRUD de Publicaciones
// ==================================================

// Crear una publicacion
router.post('/publicacion', crearPublicacion)


// Obtener una publicacion

router.get('/publicaciones', obtenerPublicaciones)

// Actualizar una publicacion
router.put('/publicacion/:id', actualizarPublicacion) 

// Eliminar una publicacion
router.delete('/publicacion/:id', eliminarPublicacion)



module.exports = router;

