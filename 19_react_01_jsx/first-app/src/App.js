// import logo from './logo.svg';
import './App.css';

const styles = {
  h2: {
    backgroundColor: 'pink',
    fontSize: '40px',
    color: 'white',
  },
  p:{
    backgroundColor: 'red',
    color: 'white',
    fontSize: '40px',
  },

};

const stylePrac = {
  circle1:{
    position: 'absolute',
    backgroundColor: 'red',
    top: '2000px',
    left: '400px',
  },
  circle2:{
    position: 'absolute',
    top: '2040px',
    left: '460px',
    backgroundColor: 'orange',
  },
  circle3:{
    position: 'absolute',
    top: '2090px',
    left: '515px',
    backgroundColor: 'yellow',
  },
  circle4:{
    position: 'absolute',
    top: '2090px',
    left: '570px',
    backgroundColor: 'green',
  },
  circle5:{
    position: 'absolute',
    top: '2100px',
    left: '640px',
    backgroundColor:'blue',
  },
  

  eye1: {
    position:'absolute',
    top: '2010px',
    left: '420px',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    backgroundColor: 'white',
  },
  eye2: {
    position:'absolute',
    top: '2020px',
    left: '420px',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    backgroundColor: 'black',
  }
}

function App() {
  const name = "yena";

  let flag = true; //false
  let txt = ' ';

  if(flag){
    txt =  "True입니다";
  }else{
    txt = "false입니다.";
  }



const dogName = '코코';
const myAnimal = '강아지';

const result = 3 + 5;

const a = 30;
const b = 20;

  return (
    //JSX 문법
    //1. 컴포너트에 여러  요소 있으며 반드시 부모 요소 하나로 감싸야 한다.
    //
    <div className="App">
      {/* 2. {} 감싸면 자바스크립트 표현식 사용가능 */}
      {/* 3. styles 속성
            --dom 요소에 스타일 적용시 문자열 x -> "객체" 시용
            --스타일 이름 중 하이픈(-) 포함시 camelCase 작성해야 함 */}
      <h2 style = {styles.h2}>안뇽 {name}</h2>
      <h2 style = {styles.p}>안뇽 {name}</h2>


      <h2
        style={{
          backgroundColor: 'blue',
          fontSize: '40px',
          color: 'white',
        }}
      >
        안뇽 {name}
      </h2>
      
      
      <h2>안뇽 {name}</h2>
      <h2>{name === 'yena' ? '반가워' : '누구...?'}</h2>
      <p>반가워</p>


      <p>{txt}</p>
      <p>{flag ? <h3>true입니다.</h3> : <h3>false입니다</h3>}</p>
      <p>{flag && <h3>true입니다.</h3>}</p>
      {/* <img src = {logo} alt = "로고"></img> */}


      {/* 4. className 사용
          -- class 속성이 아닌 className 속성을 사용 */}
          
      <h3 className = "hello" onClick={() => alert('안녕하세요!')}>hello~~</h3>

      {/* 5. 종료태그가 없는 태그의 사용
          -- 기존 tml 태그에서 종료태그가 없더라고 종료태그를 작성해야 함
          -- or self-closing
          -- 잘못된 예) <input>, <br> 
          -- 올바른 예) <input />, <br />*/}


      {/* 6. 주석
          -- // : jsx 외부 주석
          -- jsx 내부 주석 */}

    <br/>
    <h2>실습문제1.</h2>
    <div>"이것은 div입니다.</div>

    <h2>실습문제2.</h2>
    <h2>제 반려동물의 이름은 {dogName}입니다</h2>
    <h2>{dogName}는 {myAnimal}입니다.</h2>


    <h2>실습문제3.</h2>
    <h2>{result === 8 ? '정답입니다' : '오답입니다'}</h2>


    <h2>실습문제4.</h2>
    <h2>{a > b && "a가 b보다 큽니다"}</h2>

    <h2>실습문제5.</h2>
    <div className='boxDiv'>
      <div className='test'>Hello World</div>
    </div>

    <label for = "user_id">아이디</label>
    <input type = "text" id = "user_id" name = "user_id"></input><br />

    <label for = "user_pw">비밀번호</label>
    <input type = "password" id = "user_pw" name = "user_pw"></input>


    <h2>실습문제6.</h2>

  <div className='colors'>
    <div className='color red'></div>
    <div className='color orange'></div>
    <div className='color yellow'></div>
    <div className='color green'></div>
    <div className='color blue'></div>
    <div className='color navy'></div>
    <div className='color purple'></div>
  </div>

    

    <h2>실슴문제45. 애벌레실습</h2>

          
    <div style = {stylePrac.circle1} className='circle circle1'></div>
    <div style = {stylePrac.circle2} className='circle circle2'></div>
    <div style = {stylePrac.circle3} className='circle circle3'></div>
    <div style = {stylePrac.circle4} className='circle circle4'></div>
    <div style = {stylePrac.circle5} className='circle circle5'></div>
    <div className='eye eye1'></div>
    <div className='eye eye2'></div>





    </div>

  );
}

export default App;
