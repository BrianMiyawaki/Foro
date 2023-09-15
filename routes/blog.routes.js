const { Router } = require('express');
const router = Router()


router.get('/home', (req, res) => {
    res.render("index")
})

router.post('/nueva-publicacion',(req, res) => {
    //recibir datos por boy
    const {titulo, detalle} = req.body

    //se guardan en una base de datos
    console-console.log(titulo,detalle);

    return res.send({msg: "Publicacion guardada con exito"})
} )

module.exports = router;

