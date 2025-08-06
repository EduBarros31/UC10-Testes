const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');

const livroModel = sequelize.define('Livro', {

   id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
   }, 

   titulo: {
    type: DataTypes.STRING(50),
    allowNull: false,

    },

    autor: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    ano_publicacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
    },

    genero: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },

    preco: {
        type: DataTypes.FLOAT,
        allowNull: false,

    },
},
   

   {
    tableName: 'livro',
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em'
   }
)

module.exports = livroModel;








  

