// CREATE TABLE visitor(
//     id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
//     name VARCHAR(10) NOT NULL,
//     comment MEDIUMTEXT
// );

const { STRING } = require("sequelize");


//TODO : visitor 모델(-> 테이블 구조) 정의
//시퀄라이즈 모델이랑 mysql table 연결
const Visitor = function(Sequelize, DataTypes){ //('./Visitor')(sequelize, Sequelize);
    //Sequelize : models/index.js의 sequelize.
    //DateTypes : models/index.js의 Sequelize.

    // Sequelize.define(param1, param2, param3)
    //param1 : 모델 이름 설정 -> 문자열 ''
    //param2 : 컬럼 정의 -> 객체 {}
    //param3 : 모델 옵션 정의 -> 객체 {}

    //const model 변수를 만들어서 그 변수에 mysql 테이블 정보를 넣는다.
    //즉 model은 시퀄라이즈 방식으로 선언한 mysql 정보를 갖고 있는 변수
    //즉 model은 mysql 정보라고 생각하면 된다.
    const model = Sequelize.define(
        'visitor',
        {
            // id INT AUTO_INCREMENT NOT NULL PRIMARY KEY
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name:{
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            comment:{
                type: DataTypes.TEXT('medium'),
            }
        },
        {
            tableName: 'visitor', //실제 DB의 테이블 이름
            freezeTableName:  true, // 테이블 이름을 고정시킨 것.
            timestamps: false, // 데이터가 추가/수정 되는 시간을 자동으로 컬럼 만들어서 기록해준다.-> 지금은 필요없어서 false를 넣었다.
        }
    );

    return model; // 시퀄라이즈식 mysql을 담은 model를 반환한다.
    //VIsitor.js = model 변수 = mysql
};

//mysql 정보가 있는 Visitor를 내보낸다. -> 다른 파일에서 Visitor를 사용한다면 그건 mysql 정보를 쓰기 위함.
module.exports = Visitor; // 파일에서 내보내기
//index.js에서 Visitor를 사용하기 때문에 내보냈다.

//require('./Visitor')이게 지금 현재 파일.