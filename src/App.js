import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';

function App() {
  return (
    <div className="App">
      <Home/>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
