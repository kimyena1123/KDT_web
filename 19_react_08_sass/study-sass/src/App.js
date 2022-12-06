import Origin from './Origin';
import Sass from './Sass';
import Prac56 from './Prac56';
import Prac57 from './Prac57';
import PostList from './PostList';

function App() {
  return (
    <div className="App">
      <h1>Origin component</h1>
      <h2>Origin-css(기본)버전으로</h2>
      <Origin/>
      <hr></hr>
      <h1>Sass component</h1>
      <h2>Sass-scss 버전으로</h2>
      <Sass/>
      <hr></hr>
      <h1>실습56-애벌레</h1>
      <Prac56 />
      <hr></hr>
      <Prac57 />
      <hr></hr>
      <hr></hr>
      <PostList />
    </div>
  );
}

export default App;
