import React from 'react'
import './App.css';
import LeftBar from './Left-bar.js';
import Title from './header.js'

function App() {
  return (
    <div className="App">
      <LeftBar />
      <div>
        <Title /> 
      </div>
    </div>
  );
}

export default App;
