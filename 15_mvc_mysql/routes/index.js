const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();


//기본주소 : localhost:PORT

//GET / -> localhost: PORT/
router.get('/', controller.main);

//GET / visitor -> localhost: PORT/visitor
router.get('/visitor', controller.getVisitors);


//POST/ visitor/write -> localhost:PORT/visitor/write
//여기서 /visitor/write는 따로 ejs 파일이 있어서 render하는 것이 아닌
//post로 send 한다. 
///visitor/write는 axios의 url 이다.
router.post('/visitor/write', controller.postVisitor); // 하나 추가 //  /visitor/write 경로로 오면 controller에 있는 postVisitor를 실행할 것이다.

//DELETE /visitor/delete
router.delete('/visitor/delete', controller.deleteVisitor); //하나 삭제

module.exports = router;