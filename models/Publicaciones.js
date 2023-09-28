const { DataTypes, sequelize } = require('../database');  // con require hacemos una importacion

const PublicacionSchema = sequelize.define('Publicaciones', {   // defino esquema de datos, como define es una funcion recibe 2 argumentos, Publicaciones y un conjunto estructurado de datos
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  url_imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},{
  tableName: 'publicaciones',
  timestamps: false     // para que no genere fechas por defecto
});


  module.exports = PublicacionSchema;  // a traves de este esquema puedo insertar o consultar datos asdasdas