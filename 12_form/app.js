const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs'); //view engine 등록
app.use('/views', express.static(__dirname + 'views'));// views 파일 설정

app.get('/', function(req, res){
    //res.send('root page);
    res.render('index'); ///views/index.ejs 파일을 찾아서 응담
});

app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`);
});