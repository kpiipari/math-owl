import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import SubHeader from './components/sub-header';
import Game from './components/game';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SubHeader />
        <Game />
      </div>      
    );
  }
}

export default App;
