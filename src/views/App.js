import logo from './logo.svg';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../redux/action/counterAction';
import mycomponent from './Example/mycomponent';
import React from 'react';
import Mycomponent from '../components/Mycomponet';
import Userinfor from '../components/Userinfor';

/*
2 components: class component / function component (function, arrow function)
function component: function App() {}
arrow function: const App = () => {}
*/

class App extends React.Component{
  render(){
    return(
      <div >
        hello skibidi
        <Mycomponent/>
      </div>
    );
  }
}

//  const App = () => {
//   const count = useSelector(state => state.couter.count);
//   const dispatch = useDispatch();
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//         <Mycomponent/>
//       </header>
//     </div>
//   );
// }

export default App;

