import './App.css';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';
import Button from './Button';

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
    </div>
  );
}

export default App;
