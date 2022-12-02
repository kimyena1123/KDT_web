const express = require('express');
const app = express();
// socket은 express가 아닌 http 모듈에 연결해야 사용 가능
const http = require('http').Server(app);
const io = require('socket.io')(http); // http-socket 연결
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));

const nickArray = { //유저목록

};

app.get('/', (req, res) => {
    res.render('prac43');
});

//[실습46] DM 기능 구현
//유저 목록 업데이트
function updateList(){
  io.emit('updateNicks', nickArray); // "모두에게" 유저목록. {socket.id : nick1, socket.id : nick2, ...}
}

// io.on()
// : socket과 관련된 통신작업을 처리
io.on('connection', (socket) => {
  // "connection" event
  // : 클라이언트가 접속했을 때 발생, 콜백으로 socket 객체를 제공!

  console.log('**** ⭕ Server Socket Connected >> ', socket.id);
  // socket.id: 소켓 고유 아이디 -> socket은 웹 페이지 별로 생김!!

  //[실습44] 채팅창 입장 안내 문구
//   io.emit('notice', `${socket.id.slice(0,5)}님이 입장하셨습니다.`); //socket.on('notice', (msg) => {


  //[실습44-2] 채팅창 입장 안내 문구 socket,io -> nickname
  socket.on('setNick', (nick) => { //여기서 nick 변수는 = document.querySelector('#nickname').value
    console.log('socket on setNick >> ', nick); //nick = document.querySelector('#nickname').value

    //nickArray: {socket.id1 : nick1, socket.id2 : nick2, ...}
    // -> Object.valuse() : [ nick, nick2, nick3 , ....]
    // -> nick이 존재하는지

    if(Object.values(nickArray).indexOf(nick) > -1){
        //닉네임 중복이 있다면

        //quiz2
        //'error'이름의 이벤트를 전달 emit('닉네임이 중복입니다');
        socket.emit('error', '이미 존재하는 닉네임입니다. 다시 시도해주세요');
    
        
    }else{
        //닉네임 중복이 없다면
        nickArray[socket.id] = nick; //{socket.id: nick}
        console.log('접속 유저 목록 >> ', nickArray);
        //{socket.id1 : nick1, socket.id2 : nick2, ...}

        io.emit('notice', `${nick}님이 입장하셨습니다.`); //socket.on('notice', (msg) => {
        socket.emit('entrySuccess', nick); //socket.on('entrySuccess', (nick) => {
        
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

  
  //[실습 45] 채팅창 메세지 전송 step1
  socket.on('send', (data) => { //socket.emit('send', data)
    console.log('socket on send >> ', data); ; //{myNick: 'a', msg: 'cc', dm: '전체|특정닉네임'}


     // 전체; socket on send >>  { myNick: 'x', dm: 'all', msg: 'dd' }
    // 특정유저; socket on send >>  { myNick: 'zz', dm: '1q50EKrp0sOCwbh7AAAD', msg: 'aaa' }

    //전체를 선택하지 않았다면 -> dm
    if(data.dm !== 'all'){ //dm 부분//document.querySelector('#nick-list').value,
      let dmSocketId = data.dm; // 특정 유저의 socket id
      const sendData = {nick: data.myNick, msg: data.msg, dm: '(속닥속닥)'}

      io.to(dmSocketId).emit('newMessage', sendData); // 특정 소켓아이디에게만 메시지 전송
      
      socket.emit('newMessage', sendData); //자기 자신에게도 dm 메세지 전송


    }else{ // 전체메세지 전송

      // data.dm: 특정 유저의 socket id
      if(data.msg !== ''){
          const sendData = {nick: data.myNick, msg: data.msg};
          io.emit('newMessage', sendData); //전체공지 때린다.
      }

    }
    //[실습45] 채팅창 메세지 전송 step2
    

  });
});



// 주의!!!) 소켓을 사용하기 위해서는 http.listen()으로 포트를 열어야 함
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});