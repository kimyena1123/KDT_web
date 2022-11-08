const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//##################################################3

const realId = 'banana';
const realPw = '4321';

//####################################################

//MVC 패턴 적용
const indexRouter = require('./routes/index');
app.use('/', indexRouter); //indexRouter가 되면 localhost:post/ 경로를 기본으로 ./routes/index.js 파일에 선언한대로 동작한다.

//######################################################








//####################################################
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
