import './App.css';
import SyntheticEvent from './SyntheticEvent';
import NumberTest from './NumberTest';
import ClassBind from './ClassBind';
import TextColor from './TextColor';
import ShowHide from './ShowHide';


function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr></hr>
      <NumberTest/>

      <hr></hr>

      <ClassBind />
      <hr></hr>

      <h1>실습1.</h1>
      <TextColor />

      <hr></hr>
      <h1>실습2.</h1>
      <ShowHide />
    </div>
  );
}

export default App;
