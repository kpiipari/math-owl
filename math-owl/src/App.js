import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import GameContainer from './containers/game-container';


class App extends Component {

  render() {
      return (
          <div>
              <Header />
              <GameContainer />
          </div>
      )
    }
}

export default App;
