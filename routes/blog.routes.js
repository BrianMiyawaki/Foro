const { Router } = require('express');
const { crearPublicacion, obtenerPublicaciones, actualizarPublicacion, eliminarPublicacion   } = require('../controller/blog.controller');
const router = Router()


router.get('/home', (req, res) => {
    res.render("index")
})

// Crear una publicacion
router.post('/publicacion', crearPublicacion)


// Obtener una publicacion
router.get('/publicaciones', obtenerPublicaciones)

// Actualizar una publicacion
router.put('/publicaciones:id', actualizarPublicacion)

// Eliminar una publicacion
router.put('/publicaciones:id', eliminarPublicacion)

module.exports = router;

