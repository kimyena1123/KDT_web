const express = require('express');
const controller = require('../controller/Cmain'); //ruter는 controller와 연결되어 있어야 한다.
const router = express.Router();

//Routing(경로설정)
//기본 경로 : localhost:8000:PORT/

//GET

//app.get , app.post가 아니라 router로 해야 한다.
router.get('/', controller.main); //메인함수 실행

router.post('/practice30', controller.practice30); //practice30 실행.


module.exports = router;