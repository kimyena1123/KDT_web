// TODO: 컨트롤러 코드
const User = require('../model/User');


exports.main = (req, res) => {
    res.render('user');
};

exports.getSignup = (req, res) => {
    res.render('signup');
};


exports.postSignup = (req, res) => {
    console.log(req.body);

    User.postSignup(req.body, (result) => {
        console.log('CUser.js', result);

        res.send({
            userid: req.body.userid,
            pw: req.body.pw,
            name: req.body.name,
        })
    })
}

exports.getSignin = (req, res) => {
    res.render('signin');
};

// exports.getUserId = (req, res) => {
//     User.getUserId()
// }

exports.postSignin = (req, res) => {
    console.log(req.body);
    console.log(req.body.userid);
    console.log(req.body.pw);

    User.postSignin(req.body, (result) => {
        console.log('CUser.js 로그인 성공실패 확인>>', result); // {} 

        /*
        if(result == undefined){
            res.send(false);
        }
        else{
            res.send(true);
        }*/

        /*아니면 이 방식도 있다*/
        if(result.length > 0){ // 성공
            //[ RowDataPacket { id: 29, userid: 'a', name: 'a', pw: 'a' } ]
           res.send(true);
        }
        else{ //실패
            //CUser.js 로그인 성공실패 확인>> []
            res.send(false);
        }
       
    })
}


exports.postProfile = (req, res) => {
    console.log(req.body);

    User.postProfile(req.body, (result) => {
        console.log("## Controller postProfile >> ", result); // [{}]
        console.log("## Controller postProfile >> ", result.length); // [{}]

        if(result.length > 0){ //로그인 성공
            res.render('profile', {data: result[0]}); // {}
        }
        // else{ //로그인 실패
        //     res.redirect('/user/signin');
        // }
    })
}

exports.postProfileEdit = (req, res) => {
    console.log(req.body);

    User.postProfileEdit(req.body, (result) => {
        console.log("CUser.js의 postProfileEdit >>>", result);

        res.send('수정 성공!');
    })
}

exports.postProfileDelete = (req, res) => {
    console.log(req.body);
    console.log(req.body.id);

    User.postProfileDelete(req.body.id, (result) => {
        console.log("CUser.js ", result);

        res.send('삭제 성공!');
    })
}