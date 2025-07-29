const express = require('express');
const expositorController = require('../controllers/expositorController')
const router = express.Router();

router.post('/', expositorController.criarExpositor);

router.get('/', expositorController.listarExpositores);

router.get('/:id', expositorController.buscarExpositorPorID);

router.put('/:id', expositorController.atualizarExpositor);

router.delete('/:id', expositorController.deletarExpositor); 



module.exports = router;