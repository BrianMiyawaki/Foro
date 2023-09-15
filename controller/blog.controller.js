const ctrl = {}
const Publicaciones = require('../models/Publicaciones');

ctrl.crearPublicacion = async (req, res) => {
    const {
        titulo,
        descripcion,
        fecha,
        url_imagen,

    } = req.body
    
    //se crea nueva publicacion
    const publicacion = Publicaciones.create({
        titulo,
        descripcion,
        fecha,
        url_imagen,


   })

res.send({
    msg:"Publicacion creada con exito"
})
}

// Se consultan todas las publicaciones
ctrl.obtenerPublicaciones = async (req, res) => {
    
}

ctrl.actualizarPublicacion = async (req, res) => {

}


ctrl.eliminarPublicacion = async (req, res) => {
    

}

ctrl.obtenerPublicacion = async (req, res) => {
}



module.exports = ctrl;