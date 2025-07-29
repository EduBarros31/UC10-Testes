const express = require('express');
const PrototipoController = require('../controllers/prototipoController')
const router = express.Router();





router.post('/', PrototipoController.criarPrototipo);

router.get('/', PrototipoController.listarPrototipos);

router.get('/:id', PrototipoController.buscarPrototipoPorID);

router.put('/:id', PrototipoController.atualizarPrototipo);

router.delete('/:id', PrototipoController.deletarPrototipo);

module.exports = router;