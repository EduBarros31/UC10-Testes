const express = require('express');
const LivroController = require('../controllers/livroController');
const router = express.Router();


router.post('/', LivroController.criarLivro);

router.get('/', LivroController.listarLivros)



module.exports = router;