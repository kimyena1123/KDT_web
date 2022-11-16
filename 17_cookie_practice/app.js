//coolie
const express = require('express');
const cookieParser = require('cookie-parser');
//cookie-parser
//요청의 쿠키를 해석해서 req.cookie 객체로 만들어준다.
//ex) name = hello 라는 쿠키를 보내면 req.cookies에는 -> {name : 'hello'}가 들어있다.
//유효기간이 지난 쿠키는 알아서 제거
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true })); //body-parser
app.use(express.json());

//cookie-parser를 사용하겠다.
app.use(cookieParser()); // req.cookies 가능해짐


// res.cookie(키, 값, 옵션)
// : 쿠키를 "설정"

// res.clearCookie(키, 값, 옵션)
// : 쿠키를 "삭제"

const popup = {
    httpOnly: true,
    maxAge: 60 * 1000, // 10 * 1000 -> 10초
}



//res.cookie()
app.get('/', (req, res) => {
    // req.cookies.popup
    //쿠키 설정시 : 'hide',
    //쿠키 미설정시 : ''
    res.render('index', {popup: req.cookies.popup}); // myModal.show(); //아래 코드. 쿠키 설정을 clismeModal을 눌렀을 떄 해서 아직 쿠키 설정이 안된 것. 그래서 req.cookies.popup를 출력했을 때 공백으로 나오는 것. 
});

app.post('/setCookie', (req, res) => {
    //쿠키 설정
    res.cookie('popup', 'hide', popup); //응답을 보내는 게 아니라 쿠키를 설정하는 기능이다.
    //res가 두 개 있어서 응답을 두 번 보내는 것처럼 보일 수 있지만 아니다.

    //응답 보내기
    res.send('쿠키 설정 성공')
})


app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});
  