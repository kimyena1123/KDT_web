const Visitor = require('../model/Visitor');

//GET / => localhost:PORT/

exports.main = (req, res) => {
    res.render('index');
};

exports.getVisitors = (req, res) => {
    //before
    // console.log(Visitor.getVisitors());
    // res.render('visitor', {data: Visitor.getVisitors()});

    //after
    Visitor.getVisitors((result) => {
        console.log('Cvisitor.js', result);
        res.render('visitor', {data : result});
    })
}


exports.getVisitor = (req, res) => {
    console.log(req.query); //GET은 query에 정보가 담겨있다.
    console.log(req.query.id); //id 값 추출

    Visitor.getVisitor(req.query.id, (result) => {
        console.log("CVisitor.js", result);

        res.send(result);
    })
}

exports.postVisitor = (req, res) => {
    console.log(req.body);


    //여기서 req.body는 밑에 있는 코드를 의미함.
    //name: form.name.value,
    //comment: form.comment.value,

    Visitor.postVisitor(req.body, (result) => {
        console.log('Cvisitor.js', result);

        res.send({
            id: result, //여기서 result는  callback(rows.insertId);을 의미함.
            name : req.body.name, 
            comment: req.body.comment,
        })
    })
}

exports.patchVisitor= (req, res) => {
    console.log(req.body);

    Visitor.patchVisitor(req.body, (result) => {
        console.log("CVisitor.js", result);

        res.send('수정 성공!!');
    })

}

exports.deleteVisitor = (req, res) => {
    console.log(req.body);
    console.log(req.body.id);

    Visitor.deleteVisitor(req.body.id, (result) => {
        console.log("Cvisitor " + result);

        res.send('삭제 성공');
    });
}