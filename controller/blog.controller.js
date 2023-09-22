const ctrl = {}
const Publicaciones = require('../models/Publicaciones');

ctrl.crearPublicacion = async (req, res) => {

    //se crea nueva publicacion
    const publicacion = await Publicaciones.create(req.body)

    res.send({
    msg:"Publicacion creada con exito",
    publicacion

    })
}

// se consultan todas las aplicaciones 
ctrl.obtenerPublicaciones = async (req, res) => {
   
}

ctrl.actualizarPublicacion = async (req, res) => {

}


ctrl.eliminarPublicacion = async (req, res) => {
    
}



module.exports = ctrl;