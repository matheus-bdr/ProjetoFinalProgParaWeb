const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.get('/usuario/cadastrar', usuarioController.cadastrarUsuarioView);
router.post('/usuario/cadastrar', usuarioController.cadastrarUsuario);

router.get('/usuario/listar', usuarioController.listarUsuarioView);

router.get('/usuario/editar/:id', usuarioController.editarUsuarioView);
router.post('/usuario/editar', usuarioController.editarUsuario);

module.exports = router;