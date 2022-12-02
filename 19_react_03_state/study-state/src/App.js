
import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import CounterFunction from './CounterFunction';
import Prac47_2 from './Prac47_2';

import Prac47_1 from './Prac47_1';

function App() {
  return (
    <div className='App'>
      <h1>일 더하기 - 클래스형</h1>
      <Counter />
      <hr></hr>

      <SayFunction />
      <hr></hr>

      <h1>일 더하기 - 함수형</h1>
      <h5>일 더하기 - props 추가한 경우</h5>
      <CounterFunction value = "일 더하기" />

      <hr></hr>
      <Prac47_1></Prac47_1>

      <hr></hr>

      <Prac47_2></Prac47_2>
    </div>
  );
}

export default App;

