const express = require('express');
const app = express();
const PORT = 8000;

//multer 설정
const multer = require('multer');
const path = require('path');

const upload = multer({
    dest: 'uploads/',
});

const upleadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            //req: 요청에 대한 정보
            //file: 파일에 대한 정보
            //done(에러, 저장경로): 함순
            done(null, 'uploads/'); //경로 설정. 위에 dest와 같은 파일에
        },
        filename(feq, file, done){
            //req: 요청에 대한 정보
            //fiile: 파일에 대한 정보
            //done: 함수
            const ext = path.extname(file.originalname); //file.originalname에서 "확장자" 추출하는 과정
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
            //[파일명+현재시간.확장자] 이름으로 바꿔서 파일 업로드하는 코드
            //현재시간 붙이는 이유: 파일명이 겹치는 것을 막기 위함이다.
        }
    }),
    limits:{fileSize: 5 * 1024 * 1024},
})

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res){
    res.render('index', {title: 'file_upload'});
});

//1. single(): 하나의 파일 업록드할 때
//single()의 인자로 input태그의 name 값을 넣어야 한다.
//single()에 의해서 => req.file 객체에 파일정보를 가지고 있다.

// app.post('/upload', upload.single('userfile'), function(req, res){
    app.post('/upload', upleadDetail.single('userfile'), function(req, res){
    //req.file: 파일 업로드 성공결과(즉, 파일정보)가 나옴
    console.log(req.file);

 //   {
//        fieldname: 'userfile', // 폼에 정의된 name
 //       originalname: 'ex4.jpg', // 원본 파일명
 //       encoding: '7bit', // 파일 엔ㅋ
 //       mimetype: 'image/jpeg', // 파일 타입
 //       destination: '/uploads', // 파일을 저장할 경로(폴더)
 //       filename: 'e83aa5d6efdafd89c82954d2fc30e893', // destination에 저장된 파일명
 //       path: '\\uploads\\e83aa5d6efdafd89c82954d2fc30e893', // 업로드된 파일 전체 경로
 //       size: 22630 //파일 크기(byte)
 //     }

    //req.body: title 데이터 정보 확인 가능
    //[Object: null prototype] { title: 'asdf' }
    console.log(req.body);

    res.send("Upload finish")
});


app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`);
});