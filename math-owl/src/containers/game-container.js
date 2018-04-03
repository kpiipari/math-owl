import React, { Component } from 'react';

import SubHeader from '../components/sub-header';
import GameDashboard from './game-dashboard';


class GameContainer extends Component {
  state = {
    level: 1,
    game: "",
    score: 1,
    time: 0,
    gameSelected: true,
    gameStarted: true,
    roundEnded: true,
    gameEnded: false,
    round:{var1: 5, var2: 5, answer: 10}, 
    answer: '',
  };

  handleGameSelection = (event) => {
    event.preventDefault();
    this.setState({
        gameSelected: true,
        game: event.target.id
    })
  }

  handleGameStart = () => {
    this.setState({
        gameStarted: true
    })
  }

  handleChange = (event) => {
      this.setState({
          answer: event.target.value,
      });
  }

  onContinue = () => {
    this.setState({
        level: this.state.level + 1,
        gameStarted: false
    });
  }

  onQuit = () => {
    this.setState({
        gameEnded: true
    });
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
                round={this.state.round}
                answer={this.state.answer}
                handleChange={this.handleChange}
                handleGameStart={this.handleGameStart}
                handleAnswerFormSubmit={this.handleAnswerFormSubmit}
                handleGameSelection={this.handleGameSelection}
                onContinue={this.onContinue}
                onQuit={this.onQuit}
              />
          </div>
      )
    }
}

export default GameContainer;
