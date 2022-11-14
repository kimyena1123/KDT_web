// TODO: 컨트롤러 코드
// const User = require('../model/User');
const models = require('../models');


exports.main = (req, res) => {
    res.render('user');
};

exports.getSignup = (req, res) => {
    res.render('signup');
};


exports.postSignup = (req, res) => {
    // console.log(req.body);

    // User.postSignup(req.body, (result) => {
    //     console.log('CUser.js', result);

    //     res.send({
    //         userid: req.body.userid,
    //         pw: req.body.pw,
    //         name: req.body.name,
    //     })
    // })


    //INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}'
    models.User.create({
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.pw,
    }).then((result) => {
        console.log('create >>', result);
        res.send(result);
    });
}

exports.getSignin = (req, res) => {
    res.render('signin');
};

// exports.getUserId = (req, res) => {
//     User.getUserId()
// }

exports.postSignin = (req, res) => {
    /*
    console.log(req.body);
    console.log(req.body.userid);
    console.log(req.body.pw);

    User.postSignin(req.body, (result) => {
        console.log('CUser.js >>', result); // {} 

        /*
        if(result == undefined){
            res.send(false);
        }
        else{
            res.send(true);
        }

        아니면 이 방식도 있다
        if(result.length > 0){ // 성공
           res.send(true);
        }
        else{ //실패
            res.send(false);
        }
       
    })*/


    //SELECT * FROM user WHERE userid = '${data.userid}' AND pw = '${data.pw}' LIMIT 1
    models.User.findOne({
        where: {
            userid: req.body.userid, 
            pw: req.body.pw
        }
    }).then((result) => {
        console.log('rindOne 로그인 성공 실패>> ', result);
        // 성공할 때 객체

        if(result == null){
            res.send(false);
        }
        else{
            res.send(true);
        }
    })

}


exports.postProfile = (req, res) => {
    /*
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
    })*/



    //SELECT * FROM user WHERE userid = '${data.userid}
    models.User.findOne({
        where: {userid: req.body.userid}
    }).then((result) => {
        console.log('findOne >> ', result); // [{}] -> {}

        if(result != null){ //if(result)
            res.render('profile', {data: result});
        }

        // if(result){ //썜 코드
        //     res.render('profile', data: result);
        // }
    })
}

exports.postProfileEdit = (req, res) => {
    /*
    console.log(req.body);

    User.postProfileEdit(req.body, (result) => {
        console.log("CUser.js의 postProfileEdit >>>", result);

        res.send('수정 성공!');
    })*/


    //UPDATE user SET name = '${data.name}', userid = '${data.userid}', pw = '${data.pw}' WHERE id = '${data.id}'`,
    models.User.update({
        name: req.body.name,
        userid: req.body.userid,
        pw: req.body.pw,
    },
    
    {
        where: {id: req.body.id}
    }).then((result) => {
        console.log('update>>> ', result);

        res.send('수정 성공');
    })

    

}

exports.postProfileDelete = (req, res) => {
    /*
    console.log(req.body);
    console.log(req.body.id);

    User.postProfileDelete(req.body.id, (result) => {
        console.log("CUser.js ", result);

        res.send('삭제 성공!');
    })*/


    //DELETE FROM user WHERE id = ${id}
    models.User.destroy({
        where:{id: req.body.id}
    }).then((result) => {
        console.log('destroy>>', result);

        res.send('삭제성공');
    })
}