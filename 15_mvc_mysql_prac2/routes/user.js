// TODO: 라우트 설정
const express = require('express');
const controller = require("../controller/Cuser");
const router = express.Router();

//기본주소: localhost:PORT/user

// GET/user -> 화영 메세지와 함께 회원가입 및 로그인 링크를 보여줌(index.ejs)
//기본주소: localhost:PORT?user
//GET/ -> localhost:PORT/user
router.get('/', controller.main);
//GET/user/signup: 회원가입 폼을 보여줌(signup.ejs)
router.get('/signup', controller.getSignup);

//회원가입시 id중복 확인->중복이면 등록X

//POST/user/signup :[회원가입]버튼 클릭->입력 정보 DB저장 -> 성공(true) 응답
router.post('/signup', controller.postSignup)
//GET/user/signin: 로그인 폼을 보여줌(signin.ejs)
router.get('/signin', controller.getSignin);
//POST/user/signin: [로그인] 버튼 클릭 -> DB에서 해당 정보 조회->성공(true)or 실패(false)응답
router.post('/signin', controller.postSignin);


//POST/user/profile: 로그인 성공시 로그인한 사람의 정보를 input에 값을 입력해 보여줌
//:로그인 실패시 /user/signin 리다이렉트
router.post('/profile', controller.postProfile);
//POST /user/profile/edit
router.post('/profile/edit', controller.postProfileEdit);





module.exports = router;