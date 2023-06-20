const Usuario = require('../models/usuario');

function cadastrarUsuarioView(req, res){
    res.render("pessoa/cadastrar.html", {});
}

function cadastrarUsuario(req, res){
    let usuario = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        pais: req.body.pais,
        cidade: req.body.cidade,
        bairro: req.body.bairro,
        complemento: req.body.complemento,
        numero: req.body.numero
    }
    
    Usuario.create(usuario).then((result)=>{
        res.render("usuario/cadastrar.html", {usuario});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("usuario/cadastrar.html", {erro});
    })
}

function listarUsuarioView(req, res){
    Usuario.findAll().then((pessoas)=>{
        res.render("Usuario/listar.html", {pessoas});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("Usuario/listar.html", {erro});
    })
}

function editarUsuarioView(req, res){
    let id = req.params.id
    let usuario;
    Pessoa.findByPk(id).then(function(usuario){
        res.render("usuario/editar.html", {usuario});
    })
}

function editarUsuario(req, res) {
    let usuario = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        altura: req.body.altura,
        peso: req.body.peso
    }
    Pessoa.update(
        usuario,
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
    cadastrarUsuarioView,
    cadastrarUsuario,
    listarUsuarioView,
    editarUsuarioView,
    editarUsuario,
};