const { where } = require('sequelize');
const Conta = require('../models/conta');

//acessar o banco de dados
//acessar o endereço de ID
//acessar o saldo 
//validar operação
//fazer update
function transferir(saldo,valor){
    if(saldo<valor && valor>0){
        saldo = saldo - valor;
    }else{
        console.log("invalido")
    }
}
function depositar(saldo,valor){
    if(saldo<valor && valor>0){
        saldo = saldo - valor;
    }else{
        console.log("invalido")}
}
function investir(saldo,valor){
    if(saldo<valor && valor>0){
        saldo = saldo - valor;
        console.log("investido")
    }else{
        console.log("invalido")}
}
module.exports = {
    transferir,
    depositar,
    investir,   
};
