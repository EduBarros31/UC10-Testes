const express = require('express');
const prototipoControllerApi = require('../controllers/prototipoControllerApi');
const router = express.Router();





router.post('/', prototipoControllerApi.criarPrototipo);

module.exports = router;