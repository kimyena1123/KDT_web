const express = require('express');
const app = express();
//socket은 express가 아닌 http 모듈에 연결해야 사용하다.
const http = require('http').Server(app);
const io = require('socket.io')(http); // http -socket연결.
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true })); //body-parser
app.use(express.json());

app.get('/', (req, res) => {
    res.render('chat');
});

//io.on
//: socekt과 관련된 통신작업을 처리
io.on('connection', (socket) => {
    //"connection" event
    // : 클라이언트가 서버에 접속했을 때 발생하는 이벤트,
    // : 목백으로 socket 객체를 제공

    console.log('****server socket connectedo******', socket.id);
    //sokect.id : 소켓 고유 ㅁ아이디 -> 내당스뉍 피잊 ㅕㅂㅑㅐ

    //[실습42]
    socket.on('hello', (data) => { //여기서 data는 콜백함수. socket.emit('hello', {who: 'clien', msg: 'hello'}); 
        // console.log('socket on hello >> ', data);
        console.log(`${data.who} : ${data.msg}`);

        socket.emit('helloKor', {who : 'hello', msg: '안녕~'});
    })

    socket.on('study', (data) => {
        console.log(`${data.who} : ${data.msg}`);
        socket.emit('studyKor', {who : 'study', msg: '공부~'});
    })

    socket.on('bye', (data) => {
        console.log(`${data.who} : ${data.msg}`);
        socket.emit('byeKor', {who : 'bye', msg: '잘가~'});
    })
});

//주ㅡ의) 소켓을 사용하기 위해서는 http.listen()으로 포트를 영러야함.
http.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});