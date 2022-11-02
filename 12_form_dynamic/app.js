// const { response } = require('express');
const { application } = require('express');
const express = require('express');
const app = express();
const PORT = 8000;

//db에서 가져왔다고 가정
const realId = 'banana';
const realPw = '4321';


app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing(경로설정)

app.get('/', function (req, res) {
  res.render('dynamic', { title: '동적 폼을 배워보자!!' });
});

app.get('/prac29', function (req, res) {
  res.render('prac29', { title: '실습29' });
});

app.get('/prac30', function (req, res) {
  res.render('prac30', { title: '실습30', realId: 'banana', realPw: '4321'});
  
  
});



//1.ajax
//GET/ajax
app.get('/ajax', function(req, res){ //get은 정보가 query객체에 담겨있다.
    console.log(req.query);
    res.send(req.query);
});

//POST/ajax
app.post('/ajax', function(req, res){ //get은 정보가 query객체에 담겨있다.
    console.log(req.body);
    res.send(req.body);
});

//2. AXIOS
//GET /axios
app.get('/axios', function(req, res){
  console.log(req.query);
  res.send(req.query);
})

// POST /axios
app.post('/axios', function(req, res){
  console.log(req.body); //요청을 받으니까 req. //사용자가 입력한 input 값이 넘어오는 것이다.
  //그리고 이걸 res.send로 보내는 것이다.
  

  console.log(req.body.id); //사용자가 입력한 아이디 값 
  console.log(req.body.pw); //사요앚가 압력한 비빌번호 값

  if(realId == req.body.id && realPw == req.body.pw){
    res.send({userInfo: req.body, msg: "로그인에 성공했습니다.", isLogin : true });
  }
  else{
    res.send({msg: '로그인과 비밀번호 다시 입력해주세요', isLogin: false}); //실패했을 때는 id랑 pw를 받을 필요가 없가에 userInfo애 req.body를 안보낸다.
    
  }
})


//3.fetch
//GET/ fetch
app.get('/fetch', function(req, res){
  console.log(req.query);
  res.send(req.query);
})

//POST/ fetchs
app.post('/fetch', (req, res) =>{
  console.log(req.body);
  res.send(req.body);
})

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
