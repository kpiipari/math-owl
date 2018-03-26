import React, { Component } from 'react';
import './App.css';

import GameDashboard from './components/game-dashboard';
import Header from './components/header';


class App extends Component {

  render() {
    return (
      <div>
         <Header />
        <GameDashboard />
      </div>      
    );
  }
}

export default App;
