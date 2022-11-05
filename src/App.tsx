import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Create from './pages/Create';

function App() {
  return (
    <div className="App">
      {/* <Login name="baek"/>
      <Signup name="baek"/> */}
      <Create name="baek"/>
    </div>
  );
}

export default App;
