const Sequelize = require('sequelize');
const database = require('../db');
 
const Banco = database.define('conta', {
    id: {
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
        type: Sequelize.STRING
        
    },
    criacao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    saldo: {
        type: Sequelize.FLOAT,
        allowNull: false,
        unique: true
    },
    contatype: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    senha:{
        type: Sequelize.STRING
    }
})
 
module.exports = Banco;
