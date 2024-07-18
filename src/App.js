import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
