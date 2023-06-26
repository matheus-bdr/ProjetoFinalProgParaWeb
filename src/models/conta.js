const Sequelize = require('sequelize');
const database = require('../db');
 
const Conta = database.define('conta', {
    idUnico: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dono: {
        type: Sequelize.STRING,
        allowNull: false
        
    },
    criacao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    saldo: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    contatype: {
        type: Sequelize.STRING,
        allowNull: false
   
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    },
});
 
module.exports = Conta;
