const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

//Routing(경로설정)
//기본 경로 : localhost:8000:PORT/

//GET
router.get('/', controller.main);

router.post('/practice30', controller.practice30);


module.exports = router;