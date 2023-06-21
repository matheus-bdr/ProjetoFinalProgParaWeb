const Conta = require('../models/conta');


function criarContaView(req, res){
    res.render("../views/conta/criar.html", {});
}

function criarConta(req, res){
    let conta = {
        nome: req.body.nome,
        dono: req.body.nomeDonoConta,
        criacao: req.body.dataDeCriacao,
        saldo: req.body.saldo,
        contatype: req.body.tipoDeConta,
        senha: req.body.senha

    }
    console.log(conta);

    Conta.create(conta).then((result)=>{
        res.render("../views/conta/criar.html", {conta});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("../views/conta/criar.html", {erro});
    })
};

function listarContaView(req, res){
    Conta.findAll().then((contas)=>{
        res.render("../views/conta/ver.html", {contas});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("../views/conta/ver.html", {erro});
    })
}

function editarContaView(req, res){
    let idUnico = req.params.idUnico
    let conta;
    Conta.findByPk(idUnico).then(function(conta){
        res.render("../views/conta/editar.html", {conta});
    })
}

function editarConta(req, res) {
    let conta = {
        nome: req.body.nome,
        dono: req.body.nomeDonoConta,
        criacao: req.body.dataDeCriacao,
        saldo: req.body.saldo,
        contatype: req.body.tipoDeConta,
        senha: req.body.senha
    }

    Conta.update(
        conta,
      {
        where: {
            idUnico: req.body.idUnico,
        },
      }
    ).then(function (sucesso) {
        res.render("../views/conta/editar.html", {conta, sucesso});
    })
    .catch(function (erro) {
        res.render("../views/conta/editar.html", {conta, erro})
    });

}

module.exports =  {
    criarContaView,
    criarConta,
    listarContaView,
    editarContaView,
    editarConta,
};