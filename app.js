const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

require('ejs');
require('dotenv').config() // Para poder usar las variables de entorno


const app = express()
const port = process.env.PORT || 3000

// Conexión a Base de Datos
const { sequelize } = require('./database');

/*sequelize.authenticate()    // metodo que va a intentar realizar la conexion y tiene que devolver una promesa
.then(() => console.log("Conexión a Base de datos Exitosa"))
.catch( err => console.log('Error al conectar BD: ', err))
*/

// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())     // Para que el servidor pueda comprender datos en formato json

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

// Motor de plantillas
app.set('view engine', 'ejs')
/*
app.set('views', __dirname + '/views')
*/
// Rutas
app.use(require('./routes/blog.routes'));



app.listen(port, () => console.log(`Servidor en http://localhost:${port}`))