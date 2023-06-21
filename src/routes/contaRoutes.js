const express = require('express');
const router = express.Router();

const contaController = require('../controllers/contaController');

router.get('/conta/criar', contaController.criarContaView);
router.post('/conta/criar', contaController.criarConta);

router.get('/conta/listar', contaController.listarContaView);

router.get('/conta/editar/:id', contaController.editarContaView);
router.post('/conta/editar', contaController.editarConta);

module.exports = router;