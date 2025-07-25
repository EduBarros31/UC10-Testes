const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');


const PrototipoModel = sequelize.define('Prototipo', {  

     titulo: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
     },
     descricao: {
        type: DataTypes.STRING(255),
        allowNull: false,
     },
     categoria: {
        type: DataTypes.STRING(50),
        allowNull: false,
     },
     expositor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Expositor',
            key: 'id'
        }

     }

}, {
    tableName: 'prototipo',
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em'  
});


module.exports = PrototipoModel;


















