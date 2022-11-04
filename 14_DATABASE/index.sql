CREATE DATABASE 이름 DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- DDL
-- data Defintion Language: 데이터베이스 또는 / 테이블 정의하는 언어이다.

-- [데이터베이스 관련 명령]
-- 1. 데이터베이스 생성 ( + 한글 인코딩)
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- 2. 데이터베이스 생성 확인(목록 조회)
SHOW databases; -- 뒤에 s를 붙여야 한다.

-- 3. 데이터베이스를 사용 선언(사용한다고 언급)
USE kdt;

-- 4. 데이터베이스 삭제
DROP DATABASE kdt;


-- [테이블 관련 명령]
-- 1. 테이블 생성
/*
CREATE TABLE 테이블명{
    필드1 값형식,
    필드2 값형식,
}
*/
-- --------------------------------------------------------------------------------------------
-- 제약조건
-- NOT NULL : NULL허용 X
-- AUTO_INCREMENT: 자동 숫자 증가(데이터가 들어올 때마다 ID 값을 하나씩 늘려주고 싶을 때EX) 1, 2, 3, 4,...
-- PRIMARY KEY: 기본키
-- DEFAULT: 기본값
-- UNIQUE: 중복 허용 X
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100) NOT NULL
);



CREATE TABLE user2 (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10),
    age INT,
    address VARCHAR(100)
);

CREATE TABLE member(
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT(2) NULL,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'x' -- defalt값을 줘야 오류가 안난다.
);

-- 2. 테이블 목록 확인 
SHOW tables;


-- 3. 테이블 구조 확인
DESC user;


-- 4. 테이블 삭제
-- DROP : 다 삭제(구조 자체를 삭제함)
-- TRUNCATE: 초기화(모든 행을 삭제함)

DROP TABLE user;
TRUNCATE TABLE user;

-- -----------------------------------------------------------------------
-- 5. 테이블 수정(구조 수정)
-- 5-1. 컬럼 추가(ADD)
ALTER TABLE user ADD new_column VARCHAR(10);


-- 5-2. 컬럼 수정(MODIFY)
ALTER TABLE user MODIFY new_column INT; -- VARCHAR에서 INT로 바꾸기


-- 5-3. 컬럼 삭제(DROP)
ALTER TABLE user DROP new_column;

-- ===========================================================================================================================================

-- DML
-- Data <ainpulation Language : 데이터 조작어
-- 내부 데이터를 관리하기 위한 언어

-- [Create - INSERT]
-- : 데이터 추가
-- 참고) AUTO_INCREMENT: 컬럼의 값은 굳이 넣지 않으면 아아서 증가
-- NULL이라고 넣으면 알아서 숫자가 지정되기도 한다.
-- 주의) AUTO)INCREMENT를 지정하는 컬러믕ㄴ 반드시 PK(기본키, primary key)이어야 한다.

INSERT INTO user2 (name, age, address) VALUES ('김민정', 20, '서울특별시 마포구');
INSERT INTO user2 (name, age, address) VALUES ('이지수', 30, '서울특별시 강남구');
INSERT INTO user2 (name, age, address) VALUES ('최솔이', 22, '대구광역시 동구');
INSERT INTO user2 (name, age, address) VALUES ('한소희', 25, '부산광역시 관악구');
INSERT INTO user2 (name, age, address) VALUES ('정세희', 19, '서울특별시 노원구');
INSERT INTO user2 (name, age, address) VALUES ('이한이', 23, '서울특별시 강서구');
INSERT INTO user2 (name, age, address) VALUES ('이지은', 32, '부산광역시 동구');
INSERT INTO user2 (name, age, address) VALUES ('윤새희', 37, '강원도 강릉시');
INSERT INTO user2 (name, age, address) VALUES ('박수진', 26, '충청남도 공주시');
INSERT INTO user2 (name, age, address) VALUES ('박찬희', 40, '강원도 속초시');
INSERT INTO user2 (name, age, address) VALUES ('권희수', 36, '서울특별시 영등포구');



-- [Read - SELECT]
-- 데이터 읽기(조회)
-- * : all을 의미한다(다.)
-- id, name, age, address
SELECT * FROM user2; -- 해당 테이블의 전체 데이터를 조회("전체 컬럼"을 조회한다.)
SELECT name FROM user2; -- 이름 컬럼만 조회
SELECT age, name FROM user2; -- 나이, 이름 컬럼 조회
SELECT id, address FROM user2; -- id, 주소 컬럼 조회


-- WHERE절 : 특정 조건을 만족하는 행(record, tuple) 선택
SELECT * FROM user2 WHERE age >= 25; -- 나이가 25살 이상인 사람의 정보를 볼 수 있다.
SELECT * FROM USER2 WHERE id = 7; -- id가 7인 사람을 조회
SELECT name FROM user2 WHERE ID = 7; -- id가 7인 사람의 이름을 조회
SELECT id, age FROM user2 WHERE name = '이지은'; -- 이름이 '이지은'인 사람의 id, age 조회

-- ORDER BY절: 데이터 정렬
-- ASC: 오름차순(기본값)
-- DESC : 내림차순
-- 숫자만 정렬할 수 있는 게 아님. 한글은 가나다 순이다.
SELECT * FROM user2 ORDER BY age DESC; -- 모든 컬럼에 대해서 age 컬럼을 내림차수능로 보갰다.
SELECT * FROM user2 WHERE id > 6 ORDER BY age ASC; -- id가 6이상인 사람 중에서 age컬럼 오름차순;
SELECT * FROM user2 ORDER BY name ASC; -- 이름을 오름차순으로 정렬

-- LIKE : 패턴 조회
-- % : 0개 이상의 문자
-- _ : 1개 이상의 단일문자

-- 질문) 구문에서 이름이 4글자이거나 2글자인 사람은 제외되는 건가요? 네!

SELECT * FROM user2 WHERE name LIKE '서울%'; --'서울'로 시작하는 모든 주소이 데이터를 조회한다.
SELECT * FROM user2 WHERE name LIKE '__희'; --'~희'로 끝나는 이름의 데이터를 조회
SELECT * FROM user2 WHERE name LIKE '%희%'; -- 이름에 '희'가 있는 데이터
SELECT * FROM user2 WHERE address LIKE '%광역%'; -- 주소에 '광역'이 포함된 데이터 조회

SELECT * FROM user2  WHERE name LIKE  '__희' ORDER BY age DESC; -- 이름의 마지막 글자가 '__희'인 사람의 나이를 기주능로 내림차순.

-- LIMIT: 데이터 개수 제한
SELECT * FROM user2 LIMIT 3;
SELECT* FROM user2 WHERE address LIKE '서울%' LIMIT 2; -- 서울이 들어간 주소 중에서 2개만 보여줘!


-- BETWEEN A AND B : 사이값 조회
SELECT * FROM user2 WHERE age BETWEEN 25 AND 30; -- 나이가 25살에서 30살 사이인 데이터를 보여줘

-- IN(list) : 리스트 있는 것 중에 일치하면 참
SELECT * FROM user2 WHERE age IN (20, 21, 22, 23); -- 테이블에 있는 정렬 중에 리스트에 있는 것과 같은 것들 조회

-- IS NULL
-- IS NOT NULL
INSERT INTO user2 (name, age) VALUES ('서현승', 28);
SELECT * FROM user2;

SELECT * FROM user2 WHERE address IS NULL; -- 주소가 NULL인 사람을 조회
SELECT * FROM user2 WHERE address IS NOT NULL; -- 주소가 NULL이 아닌 사람을 사람을 조회

-- 논리 연산자: AND , OR , NOT
SELECT * FROM user2 WHERE address IS NOT NULL AND age < 25; -- 주소가 NULL 이 아니"고" 나이가 25살 미만인 사람을 조회;
SELECT * FROM user2 WHERE address IS NOT NULL OR age < 25; -- 주소가 NULL이 아니"거나" 또는 나이가 25살 미만이 사람을 조회;
SELECT * FROM user2 WHERE name LIKE '이%' AND age = 23; -- 이름이 "이"로 시작하면서 나이는 23살인 사람

-- [Update - UPDATAE]
-- : 데이터 갱신(수정)
-- 참고) Error Code : 1175;
-- 테이블 데이터를 updata/delete 하려고 할 때 key 컬럼을 이용해서 수정/삭제하는 것이 바람직하다.
-- PDATE user2 SET address = "서울특별시 강북구" WHERE name = "이한이"; -- 이름이 이한이인 사람의 주소를 서울특별시 강북구로 바꾸겠다.
UPDATE user2 SET address = "서울특별시 강북구" WHERE id = 1; -- id가 1인 데이터의 주소를 수정
UPDATE user2 SET address = "제주특별자치도 제주시", name = "이지현" WHERE id = 2; -- id가 2인 사람의 주소와 이름을 수정

-- 주의) update 할 떄 where 절을 미사용시, 모든 행의 데이터가 변경된다.
-- update에서는 where절이 항상 따라다닌다.(모든 행의 데이터를 바꾸고 싶지 않은 한 where절은 항상 있어야 한다.)



-- [Delete - DELETE]
-- : 데이터 삭제
-- 주의) delete 할 때 where 절 미사용시, 모든 행의 데이터가 삭제됨
-- delete에서도 where절이 항상 따라다니는 것이 바람직하다
DELETE FROM user2 WHERE id = 11; -- id가 11인 사람의 데이터를 삭제
DELETE FROM user2 WHERE id > 8;