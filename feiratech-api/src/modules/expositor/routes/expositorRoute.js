const express = require('express');
expositorControllerApi = require('../controllers/expositorControllerApi');
const router = express.Router();

router.post('/', expositorControllerApi.criarExpositor )



module.exports = router;