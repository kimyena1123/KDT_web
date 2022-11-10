/*
const Comment = require('../model/Comment'); // 객체사용하기 위해 연결.

exports.main = (req, res) => { // controller의 main을 사용할 수 있음.
    res.render('index');
};

exports.comments = (req, res) => {
    // console.log(comments)
    onsole.log(Comment.commentInfos());

    console.log('댓글확인');
    res.render('comments', {commentInfos: comments});
};

exports.comment = (req, res) => {
    c
    console.log("param은 : " + req.params);// 매개변수의 축약형인 parmas에 이 정보가 저장되어 있다.
    //라우트(경로) 매개변수에 대한 정보가 담겨있다.(여기서 말하는 매개변수란 id를 의미한다.)
    console.log("id는: " + req.params.id); // id 값 추출

    const commentId = req.params.id; //댓글id : url로 들어온 매개변수
    //comments = [{}, {}, {}, {}]


    //comments는 객체4개
    //req.parmads.id는 객체의 id를 의미
    //comments[commentId - 1] : 객체 4개 중 
    console.log("commentpcommentId-1] : " + Comments[commentId - 1]); // 댓글 목록에서 특정 갯글 정보만 추출



    //1. :id - 존재하지 않는 댓글 id 안된다(음수, 0, 댓글배열 길이보다 큰 값이 들어오면 안된다.)
    if(commentId < 1 || commentId > Comments.length){ //comments.length(배열의 길이)보다 크다면
       return res.render('404');
        // res.send('잘못된 접근입니다.');
    }

    //2. :id - 숫자가 아닌 것이 들어오면 안된다.
    if(isNaN(commentId)){ // === true
        return res.render('404');
        // res.send('잘못된 접근입니다.');
    }

    res.render('comment', {commentInfo : Comments[commentId - 1]});
};

*/

//############################################################################


const Comment = require('../model/Comment');
console.log(Comment)
console.log(Comment.commentInfos())

// const comments = [ {}, {}, {}, {} ];
exports.main = (req, res) => {
  res.render('index');
};

exports.comments = (req, res) => {
  console.log('testset')
  // console.log(comments) // [ {}, {}, {}, {} ]
  console.log(Comment.commentInfos()); // 댓글 목록 확인용: [ {}, {}, {}, {} ]
  // { commentInfos: [ {}, {}, {}, {} ]}
  res.render('comments', { commentInfos: Comment.commentInfos() });
  //Comment.commentInfos()에서 Comment는 model에서 가져옴.
};

exports.comment = (req, res) => {
  console.log(req.params); // 라우트 매개변수(:id)에 대한 정보 담겨있음
  console.log(req.params.id); // id 값 추출

  const comments = Comment.commentInfos(); // 댓글 목록 확인용: [ {}, {}, {}, {} ]
  
  const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
  console.log(comments[commentId - 1]); // 댓글 목록에서 특정 댓글 정보 추출

  if (commentId < 1 || commentId > comments.length) {
    return res.render('404');
  }

  if (isNaN(commentId)) {
    return res.render('404');
  }

  res.render('comment', { commentInfo: comments[commentId - 1] });
};