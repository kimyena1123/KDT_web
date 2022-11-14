

// const Visitor = require('../model/Visitor'); //기존코드
const models = require('../models/index'); // 시퀄라이즈 수정 코드
// db = {sequelize: sequelize, Sequelize : Sequelize, Visitor: 모델폴더에 있는 함수-> model을 리턴함 }
//GET / => localhost:PORT/

exports.main = (req, res) => {
    res.render('index');
};

exports.getVisitors = (req, res) => {

    /* before 2!!!
    //before
    // console.log(Visitor.getVisitors());
    // res.render('visitor', {data: Visitor.getVisitors()});

    //after
    Visitor.getVisitors((result) => {
        console.log('Cvisitor.js', result);
        res.render('visitor', {data : result});
    })
    */
   /*after 2!!!*/
   //'SELECT * FROM visitor'
   models.Visitor.findAll().then(result => {
    console.log('findAll >> ', result); //[{}, {}, {}, ...]

    res.render('visitor', {data: result}); //배열을 data로 넘겨주게 된것.
   });

}


exports.getVisitor = (req, res) => {
    // console.log(req.query); //GET은 query에 정보가 담겨있다.
    // console.log(req.query.id); //id 값 추출

    // Visitor.getVisitor(req.query.id, (result) => {
    //     console.log("CVisitor.js", result);

    //     res.send(result);
    // })


    // console.log(req.body)
    //`SELECT * FROM visitor WHERE id = ${id}`
    models.Visitor.findOne({
        where: { id: req.query.id} // 안에 where절 조건을 선언
    }).then((result) => {
        console.log('findOne >> ', result);
        res.send(result);
    })
}

exports.postVisitor = (req, res) => {
    // console.log(req.body);


    // //여기서 req.body는 밑에 있는 코드를 의미함.
    // //name: form.name.value,
    // //comment: form.comment.value,

    // Visitor.postVisitor(req.body, (result) => {
    //     console.log('Cvisitor.js', result);

    //     res.send({
    //         id: result, //여기서 result는  callback(rows.insertId);을 의미함.
    //         name : req.body.name, 
    //         comment: req.body.comment,
    //     })
    // })



    //INSERT INTO visitor (name, comment) VALUES ('${data.name}' AND '${data.comment}')
    models.Visitor.create({
        name: req.body.name,
        comment: req.body.comment,
    }).then((result) => {
        console.log('create >> ', result);
        res.send(result);
    });
};



exports.patchVisitor= (req, res) => {
    // console.log(req.body);

    // Visitor.patchVisitor(req.body, (result) => {
    //     console.log("CVisitor.js", result);

    //     res.send('수정 성공!!');
    // })

    //UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}
    models.Visitor.update({
        name: req.body.name,
        comment: req.body.comment
    }, 
    {
        where: {id: req.body.id}
    }).then((result) => {
        console.log('update>> ', result); // ipdate >> [1] //1개 업데이트 했다.
 
        res.send('수정 성공!!!');
    })

}

exports.deleteVisitor = (req, res) => {
    // console.log(req.body);
    // console.log(req.body.id);

    // Visitor.deleteVisitor(req.body.id, (result) => {
    //     console.log("Cvisitor " + result);

    //     res.send('삭제 성공');
    // });



    //DELETE FROM visitor WHERE id = ${id}
    models.Visitor.destroy({
        where: {id: req.body.id}
    }).then((result) => {
        console.log('destroy >> ', result); //destroy >> 1

        res.send('삭제 성공!!');
    })

}