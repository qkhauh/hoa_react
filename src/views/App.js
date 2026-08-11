import logo from './logo.svg';
import './App.scss';
import Mycomponent from './Example/mycomponent';

/*
2 components: class component / function component (function, arrow function)
function component: function App() {}
arrow function: const App = () => {}

*/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br />
          hello world Tôi băt đâu học ReactJS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
        <Mycomponent/>
      </header>
    </div>
  );
}

export default App;
