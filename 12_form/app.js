const express = require('express');
const app = express();
const PORT = 8000;


//views 설정
app.set('view engine', 'ejs'); //view engine 등록
//Middleware(미들웨어) 설정
// : 요청(req) 과 응답(res)의 중간에서 작업
app.use('/views', express.static(__dirname + 'views'));// views 파일 설정
app.use(express.urlencoded({extended : true}));
app.use(express.json()); // json 형태로 데이터를 전달받음



// Routing - 경로 설정
//-req(request) : 요청 (cliend - > sever)
//-res(response) : 응답 (server -> client)
app.get('/', function(req, res){ // GET / (http://locahost:PORT)
    //res.send('root page);
    res.render('index'); ///views/index.ejs 파일을 찾아서 clien에게 "응답"함.
});

app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`);
});