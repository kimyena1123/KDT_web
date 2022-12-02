import './App.css';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';
import Button from './Button';
import Food from './Food';
import Book from './Book';
import Console from './Console';

import Test1 from './Test1';


function App() {
  
  return (
    <div className="App">
      <ClassComponent />
      <ClassComponent name = "KDT3기 예나" students = {28} num = {7}></ClassComponent>
      <hr />

      <FuncComponent />
      <FuncComponent name = "KDT3기 김예나" students = {25} num = {3}/>
      <hr></hr>

      <Button /> 
      <Button link = "https://www.google.com">구글</Button>
      <Button link = "https://www.daum.net">다음</Button>

      <hr></hr>
      <h1>props 실습</h1>
      <Food />
      <Food myName = "김예나" foodName = "미역국" color = "초록색"></Food>

      <hr/>

      <Book title = "나의 하루는 4시 40분에 시작된다." author = "김유진" price = {13500} type = "자기계발서" />
      <hr></hr>
      
      <h4>3번 실습문제</h4>
      <Console />
      <Console text = "APP 컴포넌트에서 text를 받아왔다." valid = {valid}></Console>

      <hr></hr>
      <h1>component 실습</h1>
      <Test1 name = "김예나" mystyle = "..."></Test1>
    </div>
  );
}

function valid(){
  alert('콘솔 띄우기 성공');
}

export default App;
