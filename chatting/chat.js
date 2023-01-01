const express = require('express');
const app = express();
// socket은 express가 아닌 http 모듈에 연결해야 사용 가능
const http = require('http').Server(app);
const io = require('socket.io')(http); // http-socket 연결
const PORT = 8000;

//multer 설정
const multer = require('multer');
const path = require('path');

const upleadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            //req: 요청에 대한 정보
            //file: 파일에 대한 정보
            //done(에러, 저장경로): 함수
            done(null, 'uploads/'); //경로 설정. 위에 dest와 같은 파일에
        },
        filename(req, file, done){
            //req: 요청에 대한 정보
            //fiile: 파일에 대한 정보
            //done: 함수

            const ext = path.extname(file.originalname); //file.originalname에서 "확장자" 추출하는 과정

            //test
            console.log("test!!!!!!:" + file.originalname);
            console.log(ext);
            console.log("basename : " + path.basename(file.originalname, ext));
            console.log("아이디로 붇이기: " + req.body.id);

            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
           // done(null, path.basename(req.body.id, ext) + Date.now() + ext);
            //[파일명+현재시간.확장자] 이름으로 바꿔서 파일 업로드하는 코드
            //현재시간 붙이는 이유: 파일명이 겹치는 것을 막기 위함이다.
        }
    }),
   // limits:{fileSize: 5 * 1024 * 1024},
})

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads')); 

app.get('/', (req, res) => {
    res.render('chat');
});

const nickArray = { //유저목록
};

function updateList() {
    io.emit('updateNicks', nickArray, Object.keys(nickArray).length); // {socket.id: nick1, socket.id: nick2, ...}
};

//io.on()
// : socket과 관련된 통신작업을 처리
io.on('connection', (socket) => {
    //'connection" event
    // : 클라이언트가 접속했을 때 발생. 콜백으로 socket 객체를 제공!

    //socket.id : 소켓 고유 아이디 -> socket은 웹 페이지 별로 생긴다!!
    console.log('**** ⭕ Server Socket Connected >> ', socket.id);

    //[실습44] 채팅창 입장 안내 문구
    //io.emit('notice', `${socket.id.slice(0,5)}님이 입장하셨습니다.`); //socket.on('notice', (msg) => {

    //[실습44-2] 채팅창 입장 안내 문구 socket.io -> nickname
    socket.on('setNick', (nick) => { // 여기서 nick 변수는 = document.querySelector('#nickname').value
        console.log('socket on setNick >> ', nick); //nick = document.querySelector('#nickname').value

        //nickArray: {socket.id1 : nick1, socket.id2 : nick2, ...}
    // -> Object.valuse() : [ nick, nick2, nick3 , ....]
    // -> nick이 존재하는지

    if(Object.values(nickArray).indexOf(nick) > -1){
        //닉네임 중복이 있다면

        socket.emit('error', '이미 존재하는 닉네임입니다. 다시 시도해주세요');
    }else{
        //닉네임 중복이 없다면
        nickArray[socket.id] = nick; //{socket.id: nick}
        console.log('접속 유저 목록 >> ', nickArray);
        //{socket.id1 : nick1, socket.id2 : nick2, ...}

        io.emit('notice', `${nick}님이 입장하셨습니다.`); //socket.on('notice', (msg) => {
        socket.emit('entrySuccess', nick, Object.keys(nickArray).length); //socket.on('entrySuccess', (nick) => {
        
        updateList(); //유저목록 업데이트
    }
    });


     //[실습44-3]접속지 퇴장시
  //"notice" 이벤트로 퇴장 공지
  socket.on('disconnect', () => {
    //1. socket.id 콘솔로 찍기
    //2. 전체 공지로 ('notice', 퇴장 메시지(유저 닉네임 포함해서))
        //ex) aaa님이 퇴장하셨습니다
    //3. nickArray에서 해당 유저 삭제
    //delete 연산자 활용
    console.log("####socket disconnected >> ", socket.id);

   io.emit('notice', `${nickArray[socket.id]}님이 퇴장하셨습니다.`);

    //3. nickArray에서 해당 유저 삭제
    delete nickArray[socket.id];

    updateList(); // 객체에서 해당 유저가 퇴장했을 때, 연결을 끊겼을 때 유저목록 "업데이트"해서 다시 알려준다.
  })

  

    socket.on('send', (data) => { //socket.emit('send', data);
        // front에서 받은 data 정보
        console.log('socket on send >> ', data); //{myNick: 'a', msg: 'cc', dm: '전체|특정닉네임'}

        //전체: socket.on send >> {myNick: 'x', dm: 'all', msg: 'dd'}
        //특정유저: socket.on send >> {myNick: 'zz', dm: '1q50EKrp0sOCwbh7AAAD', msg: 'aa;}

        //전체를 선택하지 않았다면 -> dm
        if(data.dm !== 'all'){ // "전체"가 아니라면 => 특정 유저라면
            console.log('front에서 받은 dm  확인 >> ', data.dm);
            console.log('front에서 받은 myNick 확인 >> ', data.myNick);
            console.log('front에서 받은 menick 확인 >> ', data.menick);




            
            console.log('*****************************')
            let dmSocketId = data.dm; // 특정 유저의 socket id
            const sendData = {nick: data.myNick, msg: data.msg, dm: '(속닥속닥)', you: data.dm};
            
            
            io.to(dmSocketId).emit('newMessage', sendData); // 특정 소켓 아이디에게만 메세지 전송
            socket.emit('newMessage', sendData); //자기 자신에게도 dm 메세지 전송
            


        }else{

            //전체 메세지 전송
             // [실습45] 채팅창 메세지 전송 Step2

            //data.dm: 특정 유저의 socket id
            if(data.msg !== ''){ // 공백이 아니라면 => 공백일 경우 안보내지도록
                const sendData = {nick: data.myNick, msg: data.msg};
                
                io.emit('newMessage', sendData); // 전체공지 떄린다.
            }
        }
    });
});

app.post('/dynamicFile',upleadDetail.single('dynamicFile'), function (req, res) {
    console.log(req.file);
    res.send(req.file);
  }
);



// 주의!!!) 소켓을 사용하기 위해서는 http.listen()으로 포트를 열어야 함
http.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });