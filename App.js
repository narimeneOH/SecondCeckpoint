import React from "react";
import img from './img.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-img" alt="img" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div style={{border:"solid 1px black, maxWidth: 100vw"}}> 
        <h1 className="title red">My title</h1>
        <br></br>
        <img src="/logo192.png"></img>
        <br></br>
        <img src="/logo192.png"></img>
      </div>
    </div>
  );
}

export default App;
