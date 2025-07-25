const express = require('express');
const expositorControllerApi = require ('../controllers/expositorControllerApi')
const router = express.Router();





router.post('/', expositorControllerApi.cadastrar )

module.exports = router;