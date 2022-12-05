import './App.css';
import Alphabet from './Alphabet';
import Prac52 from './Prac52';
import Prac52_sean from './Prac52_sean';
import Prac54 from './Prac54';

function App() {
  return (
    <div className="App">
      <Alphabet />

      <hr></hr>
      <h1>실습52.</h1>
      <Prac52 />
      <hr></hr>
      <h1>sean - 실습52.</h1>
      <Prac52_sean/>
      <hr></hr>
      <Prac54/>
    </div>
  );
}

export default App;
