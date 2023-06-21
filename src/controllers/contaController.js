const Conta = require('../models/conta');


function criarContaView(req, res){
    res.render("../views/conta/criar.html", {});
}

function criarConta(req, res){
    let conta = {
        nome: req.body.nome,
        dono: req.body.dono,
        saldo: req.body.saldo,
        dataDeCriacao: req.body.data
    }
    
    Conta.create(conta).then((result)=>{
        res.render("../views/conta/criar.html", {conta});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("../views/conta/criar.html", {erro});
    })
}

function listarContaView(req, res){
    Conta.findAll().then((pessoas)=>{
        res.render("../views/conta/ver.html", {pessoas});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("../views/conta/ver.html", {erro});
    })
}

function editarContaView(req, res){
    let id = req.params.id
    let usuario;
    Pessoa.findByPk(id).then(function(usuario){
        res.render("../views/conta/moviment.html", {usuario});
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
        res.render("../views/conta/moviment.html", {usuario, sucesso});
    })
    .catch(function (erro) {
        res.render("../views/conta/moviment.html", {usuario, erro})
    });

}

module.exports =  {
    criarContaView,
    criarConta,
    listarContaView,
    editarContaView,
    editarConta,
};