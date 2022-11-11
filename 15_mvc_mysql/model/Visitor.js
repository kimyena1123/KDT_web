// exports.getVisitors = () => {
//     return [
//         {
//             id:1,
//             name: '홍길동',
//             comment: '내가 왔다',
//         },
//         {
//             id:2,
//             name: '이찬혁',
//             comment: '으라차차',
//         }
//     ];
// };



const mysql = require('mysql');

//DB 연결 정보
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt'
});


exports.getVisitors = (callback) => {
    //after - mysql 연결
    //query(SQL, callback)
    conn.query('SELECT * FROM visitor', (err, rows) =>{
        if(err){
            throw err; //그 에러를 출력;
        }
        
        console.log("Visitor.js " , rows);
        callback(rows);
    })
};

exports.getVisitor = (id, callback) => {
    conn.query(`SELECT * FROM visitor WHERE id = ${id}`, (err, rows) => {
        if(err){
            throw err;
        }

        console.log("Visitor.js", rows);
        callback(rows[0]);
    })
}

// 사용자가 input창에 입력한 사용자이름과, 방명록 추가
exports.postVisitor = (data, callback) => {
    conn.query(
        // `INSERT INTO visitor (name, comment) VALUES ('홍길동', '내가 왔다')`,
        `INSERT INTO visitor (name, comment) VALUES ('${data.name}' AND '${data.comment}')`,

        (err, rows) => {
            if(err){
                throw err;
            }

            console.log('Visitor.js', rows);
            callback(rows.insertId);
        }
    )
}


exports.patchVisitor = (data, callback) => {
    conn.query(
      `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}`,
      (err, rows) => {
        if (err) {
          throw err;
        }
  
        console.log('Visitor.js', rows);
        callback(true); // true: 수정 성공을 의미
      }
    );
  };


//해당 삭제
exports.deleteVisitor = (id, callback) => {
    console.log('id: ' + id);

    //id : 싸용자가 삭제버튼을 클ㄺ한 그 행의 id 값
    conn.query(
        `DELETE FROM visitor WHERE id = ${id}`, //id값 받아서 넣기

        (err, rows) =>{
            if(err){
                throw err;
            }

            console.log("Visitor.js : " + rows);
            //callback(true); //삭제성공을 의미
            callback(true);

     })
}

// [ {}, {}. {}. P{}] select userid from user;