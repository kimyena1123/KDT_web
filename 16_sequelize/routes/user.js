const express = require('express');
const controller = require("../controller/Cuser"); //controller폴더에 있는 Cuser를 가져오기
const router = express.Router();

router.get('/', controller.main);

//   /user/signup
router.get('/signup', controller.getSignup);
router.post('/signup', controller.postSignup);

//   /user/signin
router.get('/signin', controller.getSignin);
router.post('/signin', controller.postSignin);

//   /user/profile
router.post('/profile', controller.postProfile);
router.post('/profile/edit', controller.postProfileEdit);
router.post('/profile/delete', controller.postProfileDelete);

module.exports = router; //router 내보내기