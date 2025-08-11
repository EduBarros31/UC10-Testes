const express = require('express');
const LivroController = require('../controllers/livroController');
const router = express.Router();


router.post('/', LivroController.criarLivro);

router.get('/', LivroController.listarLivros)

router.get('/busca', LivroController.buscarPorTitulo);

router.get('/:id', LivroController.buscarPorId);

router.put('/:id', LivroController.atualizarLivros);

router.delete('/:id', LivroController.deletarLivro);


module.exports = router;