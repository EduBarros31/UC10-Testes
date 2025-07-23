const express = require('express');
const ProdutoControlerApi = require('../controllers/produtoControllerApi');
const router = express.Router();


router.post('/', ProdutoControlerApi.criarProduto )



module.exports = router;