const Sequelize = require('sequelize');
const database = require('../db');
 
const Conta = database.define('conta', {
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
    dataDeCriaco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    saldo: {
        type: Sequelize.FLOAT,
        allowNull: false,
        unique: true
    },
    donoDaConta: {
        type: Sequelize.STRING
        
    }
})
 
module.exports = Conta;