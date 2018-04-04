import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Home from './components/home';
import GameContainer from './containers/game-container';
import LeaderboardContainer from './containers/leaderboard-container';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
      return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={Home}/>
                    <Route path="/games" component={GameContainer}/>
                    <Route path="/leaderboard" component={LeaderboardContainer} />
                </div>
            </Router>

      )
    }
}

export default App;
