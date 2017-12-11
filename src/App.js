import React, { Component } from 'react';
import logo from './logo.png';
import pogoImg from './fun.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pogo Sticks</h1>
          <h3 className="App-subtitle"><i>Filthy Fun</i></h3>
        </header>
        <div className="App-intro">
          <img src={pogoImg} alt="fun" />
          <p>It's <i>too much</i> fun</p>
        </div>
      </div>
    );
  }
}

export default App;
