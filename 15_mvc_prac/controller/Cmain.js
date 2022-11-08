const idpw = require('../model/idpw'); //controller로 가서 model을 불러온다.

exports.main = (req, res) => {
    res.render('index');
}


exports.practice30 = (req, res) => {
    console.log(req.body); //req.body에는 {userId: 사용자가 입력한 값 , userPw : 사용자가 입력한 값} 이 저장되어 있다.
    console.log(req.body.userId);
    console.log(req.body.userPw);

    const infos = idpw.info(); //가져온 파일(idpw라는 변수 이름에 idpw파일이 담겨있음)에 있는 info를 가져온다.

    console.log(infos);
  
    //DB로부터 받아온 id pw(infos.realId)  VS 사용자가 폼에 입력한 id, pw(req.body.userId)를 비교.
    if (infos.realId === req.body.userId && infos.realPw === req.body.userPw) {
      res.send({ userInfo: req.body, isSuccess: true });
    } else {
      res.send({ isSuccess: false });
    }
}


exports.practice30 = (req, res) => {
    console.log(req.body);
    console.log(req.body.userId); //사용자가 입력한 id 값
    console.log(req.body.userPw); //사용자가 입력한 pw 값

    const infos = idpw.info();

    console.log(infos);

    const userInfo = idpw.users;//서버에 저장된 값
    
    console.log(userInfo);

    const userArray = userInfo.split("\n");

    console.log("userArray : " + userArray);
    console.log("userArray[0] : "  + userArray[0]);
    console.log("userArray[1] : "  + userArray[1]);
    console.log("userArray[2] : "  + userArray[2]);

    const idpwname = userArray[i].split("//");

    for(let i = 0; i < 3; i++){
        console.log("idpwname : " + idpwname[i]);
    }

    // console.log("idpwname1 : " + idpwname[0]);
    // console.log("idpwname2 : " + idpwname[1]);
    // console.log("idpwname3 : " + idpwname[2]);

    // const idpwname = userArray[0].split("//");
    
    // console.log("id1[0]의 split : " + idpwname[0]);
    // console.log("id1[1]의 split : " + idpwname[1]);
    // console.log("id1[2]의 split : " + idpwname[2]);

    
    

  
    if (infos.realId === req.body.userId && infos.realPw === req.body.userPw) {
      res.send({ userInfo: req.body, isSuccess: true });
    } else {
      res.send({ isSuccess: false });
    }
    
}