const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

//"경로설정"(Routing)
// 기본 경로: localhost: PORT/user

//GET / => localhost:PORT/user/
router.get('/', controller.user); //Cuser의 main

module.exports = router;