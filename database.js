const { Sequelize, DataTypes } = require('sequelize');  // Sequelize, DataTypes estos dos vamos a poder utilizarlo en la parte de models

// Instancia de conexión a la base de datos
const sequelize = new Sequelize('pruebadb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {       // con esto puedo usarlos desde cualquier punto de mi apliacion y asi evitar importaciones diferentes por cada uno de los directorios
    sequelize,
    Sequelize,        
    DataTypes
}