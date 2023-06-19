const Usuario = require('../models/conta');
const Pessoa = require('../models/conta')

function criarContaView(req, res){
    res.render("conta/criar.html", {});
}

function criarConta(req, res){
    let conta = {
        nome: req.body.nome,
        dono: req.body.donoDaConta,
        saldo: req.body.saldo,
        dataDeCriacao: req.body.dataDeCriacao
    }
    
    Conta.create(conta).then((result)=>{
        res.render("usuario/cadastrar.html", {conta});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("conta/criar.html", {erro});
    })
}

function listarContaView(req, res){
    Conta.findAll().then((pessoas)=>{
        res.render("Usuario/listar.html", {pessoas});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("Usuario/listar.html", {erro});
    })
}

function editarContaView(req, res){
    let id = req.params.id
    let usuario;
    Pessoa.findByPk(id).then(function(usuario){
        res.render("usuario/editar.html", {usuario});
    })
}

function editarConta(req, res) {
    let conta = {
        nome: req.body.nome,
        dono: req.body.donoDaConta,
        saldo: req.body.saldo,
        dataDeCriacao: req.body.dataDeCriacao
    }
    
    Conta.update(
        conta,
      {
        where: {
          id: req.body.id,
        },
      }
    ).then(function (sucesso) {
        res.render("usuario/editar.html", {usuario, sucesso});
    })
    .catch(function (erro) {
        res.render("usuario/editar.html", {usuario, erro})
    });

}

module.exports =  {
    criarContaView,
    criarConta,
    listarContaView,
    editarContaView,
    editarConta,
};