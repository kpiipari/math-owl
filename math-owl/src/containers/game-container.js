import React, { Component } from 'react';

import SubHeader from '../components/sub-header';
import GameDashboard from './game-dashboard';


class GameContainer extends Component {
  state = {
    level: 1,
    game: "",
    score: 1,
    time: 0,
    gameSelected: false,
    gameStarted: false,
    roundEnded: false,
    gameEnded: false,
    round1:{var1: 5, var2: 5, answer: 10}, 
    round2:{var1: 2, var2: 3, answer: 5}
  };

  handleGameSelection = (event) => {
     event.preventDefault();
     this.setState({
         gameSelected: true,
         game: event.target.id
     })
  }



  render() {
      return (
          <div>
              <SubHeader 
                game={this.state.game}
                level={this.state.level}
                gameMode={this.state.gameSelected}
              />
              <GameDashboard 
                game={this.state.game}
                level={this.state.level}
                score={this.state.score}
                time={this.state.time}
                gameSelected={this.state.gameSelected}
                gameStarted={this.state.gameStarted}
                gameEnded={this.state.gameEnded}
                roundEnded={this.state.roundEnded}
                round={this.state.round1}
                handleGameStart={this.handleGameStart}
                handleAnswerFormSubmit={this.handleAnswerFormSubmit}
                handleGameSelection={this.handleGameSelection}
              />
          </div>
      )
    }
}

export default GameContainer;
