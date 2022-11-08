const idpw = require('../model/idpw');

exports.main = (req, res) => {
    res.render('index');
}


// exports.practice30 = (req, res) => {
//     console.log(req.body);
//     console.log(req.body.userId);
//     console.log(req.body.userPw);

//     const infos = idpw.info();

//     console.log(infos);
  
//     if (infos.realId === req.body.userId && infos.realPw === req.body.userPw) {
//       res.send({ userInfo: req.body, isSuccess: true });
//     } else {
//       res.send({ isSuccess: false });
//     }
// }


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