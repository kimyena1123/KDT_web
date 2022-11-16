const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;


app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true })); //body-parser
app.use(express.json());

app.use(session({
    secret : 'secretKey',
    resave : false, 
    saveUninitialized: true,
    })
);

//(임시) DB에 저장되어 있는 유저정보
const userInfo = {id: 'a', pw: '1'};

app.get('/', (req, res) => {
    //세션 설정 x -> undefined
    //세션 설정 o -> userInfo.id 값
    console.log("req.session.user >> " , req.session.user);

    //세션 값이 있으면, index.ejs 렌더(isLogin: true, user: req.session.user)
    //세션 값이 없으면, index.ejf 렌더(inLogin: flase)
    if(req.session.user !== undefined){
        res.render('index', {isLogin: true, user: req.session.user});
    }
    else{
        res.render('index', {isLogin: false})
    }
    
    // res.render('index');
})


app.get('/login', (req, res) => {
    res.render('login');
})


//POST /login
//로그인 정보 일치; ㅅ세션 설정
//로그인 정보 불일치; /경로이동
app.post('/login', (req, res) => {
    console.log(req.body); //{ id: 'a', pw: '1' }
    console.log(req.body.id) // 'a'

    //로그인 정보 일치하면
    // - req.session.user 저장하고
    // - / 리다이렉트

    //로그인 정보 일치하지 않는다면
    //-alert띄우고
    //- / 경로로 이동

    if(req.body.id === userInfo.id && req.body.pw === userInfo.pw){ // 폼에 입력한 id == 디비에서 찾은 id, 폼에 입력한 pw = 디비에서 찾은 pw
        
        //세션쿠키 설정
        //req.session.키 = 값
        req.session.user = req.body.id;

        res.redirect('/'); //경로 리다이렉트
    }
    else{
        res.send(
            `<script>
                alert('로그인 실패...😢');
                document.location.href = '/';
            </script>`
        )
    }

    //세션 설정
    req.session.user = req.body.id;

    // res.send('POSt /login 요청에 대한 응답 완료')
})



app.get('/logout', (req, res) => {
    const user = req.session.user;

    console.log('GET /logout | req.session.user >> ', user); // 'a'
    
    // res.send('로그아웃 응답했음');
    //'a'
    //undefined

    if(user !== undefined){//로그아웃 요청이 올바르게 됐을 때
        //req.session.destroy(콜백)
        //콜백 안에서 로그아웃 => / 리다이렉트
        req.session.destroy((err) => {
            if(err){
                throw err;
            }

            console.log("세션을 지운 후 req.session.user>> ", user); //undefined가 나와야 한다.
            res.redirect('/');
        })
    } 
    else{
        //유저가 브라우저에서 /logout 경로로 직접 접근
        //res.send()
        // - alert
        // - /경로로 이동
        `<script>
        alert('잘못된 접근입니다');
        document.location.href = '/';
        </script>`
    }
})



app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});
  

//세션쿠키 설정
//req.session.키 = 값

//세션쿠기 사용
//req.session.키

//세션 삭제
//req.session.destroy(콜백함수)
// - 콜백함수 : 세션 삭제시 호출할 콜백함수