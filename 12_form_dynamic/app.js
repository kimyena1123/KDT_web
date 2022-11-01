// const { response } = require('express');
const { application } = require('express');
const express = require('express');
const app = express();
const PORT = 8000;

const realId = 'banana';
const realPw = '4321';


app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing(경로설정)

app.get('/dynamic', function (req, res) {
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
  console.log(req.body);
  

  console.log(req.body.id);

  if(realId == req.body.id && realPw == req.body.pw){
    res.send({userInfo: req.body, msg: "로그인에 성공했습니다.", isLogin : true });
  }
  else{
    res.send({msg: '로그인과 비밀번호 다시 입력해주세요', isLogin: false});
    
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
