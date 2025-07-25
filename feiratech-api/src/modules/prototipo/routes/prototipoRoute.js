const express = require('express');
const prototipoControllerApi = require('../../prototipo/controllers/prototipoControllerApi');
const router = express.Router();





router.post('/', prototipoControllerApi.cadastrar  )

module.exports = router;