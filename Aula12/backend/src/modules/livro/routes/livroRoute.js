const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.post('/', livroController.criarLivro);
router.get('/', livroController.listarLivros);
router.get('/busca', livroController.buscarPorTitulo);
router.get('/:id', livroController.buscarPorId);
router.put('/:id', livroController.atualizarLivros);
router.delete('/:id', livroController.deletarLivro);


module.exports = router;