//sequelize-cli 자동 생성한 파일

'use strict';

const Sequelize = require('sequelize'); //sequelize 불러오기
const config = require(__dirname + '/../config/config.json')['development']; //저기 파일로 가서 development 값을 가져온다.
//const a = require(__dirname + '/../config/config.json')['development'];
//const a = {
//   "development": {
//     "username": "user",
//     "password": "1234",
//     "database": "kdt",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {},
//   "production": {}
// }
                
const db = {}; // 빈 객체를 만드는 db 변수 -> db에는 현재 아무것도 없다.


// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }
let sequelize = new Sequelize( //위에서 sequelize를 불러온 Sequelize 객체. 그리고 그 객체를 담는 sequelize 변수.
  config.database, 
  config.username,
  config.password, 
  config
  );
//sequelize 객체 선언시 매개변수로 위 정보를 받음


db.sequelize = sequelize; //여기서 sequelize는 위에서 let sequelize
db.Sequelize = Sequelize; //여기서 Sequllize는 위에서 new Sequelize
//db = {sequelize: sequelize, Sequelize : Sequelize}


//빈 객체인 db에 Visitor를 생성. 그리고 db안에 있는 Visitor에 함수를 넣는다.
db.Visitor = require('./Visitor')(sequelize, Sequelize); //const Visitor = function(Sequelize, DataTypes)함수랑 같다고 생각하기
//models/Visitor.js 정의한 model이 db.Visitor에 들어감.
//db = {sequelize: sequelize, Sequelize : Sequelize, Visitor: 모델폴더에 있는 함수-> model을 리턴함 }

//db에 User를 생성. 그리고 db 안에 User에 함수를 넣기.
db.User = require('./User')(sequelize, Sequelize);

module.exports = db;
//db 변수 내보냄 -> 다른 파일에서 사용하기 때문.