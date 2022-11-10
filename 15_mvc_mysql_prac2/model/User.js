// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require('mysql');

//DB 연결 정보
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'kimyena3264',
    database: 'kdt'
});


exports.postSignup = (data, callback) => {
    conn.query(
        // `INSERT INTO visitor (name, comment) VALUES ('홍길동', '내가 왔다')`,
        `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`,
        (err, rows) => {
            if(err){
                throw err;
            }

            console.log('Visitor.js', rows);
            callback(rows.insertId);
        }
    )
}


exports.postSignin = (data, callback) => {
    conn.query(
        `SELECT * FROM user WHERE userid = '${data.userid}' AND pw = '${data.pw}' LIMIT 1`,
        (err, rows) => {
          if (err) {
            throw err;
          }
    
          console.log('Visitor.js!!!!', rows);

        // callback(rows[0]); // true: 일치 성공을 의미
        callback(rows); // true: 일치 성공을 의미
        
        }
      );
}


exports.postProfile = (data, callback) => {

  console.log('>>>', data )
  conn.query(`SELECT * FROM user WHERE userid = '${data.userid}'`,
  (err, rows) => {
    if(err){
      throw err;
    }

    console.log('**Moel postProfile >> ', rows); // [{}];
    callback(rows);
  }
  )
}

exports.postProfileEdit = (data, callback) => {
  conn.query(
    `UPDATE user SET name = '${data.name}', userid = '${data.userid}', pw = '${data.pw}' WHERE id = '${data.id}'`,
    (err, rows) => {
      if(err){
        throw err;
      }

      console.log("User.js의postProfileEdit>> ", rows);
      callback(true); //true : 수정 성공을 의미.
    }
  )
}

exports.postProfileDelete = (id, callback) => {
  console.log('id : ', id);

  conn.query(
    `DELETE FROM user WHERE id = ${id}`,

    (err, rows) => {
      if(err){
        throw err;
      }
      console.log("User.js : " + rows);
      callback(true);
    }
  )
}