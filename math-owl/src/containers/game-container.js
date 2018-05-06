import React, { Component } from 'react';
import { connect } from 'react-redux'

import SubHeader from '../components/sub-header';
import GameDashboard from './game-dashboard';


class GameContainer extends Component {
  state = {
    level: 1,
    game: "",
    score: 4,
    time: 0,
    player: "",
    gameSelected: false,
    gameStarted: false,
    roundEnded: false,
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

  handleAnswerSubmit = (event) => {
    console.log('Answer submitted:' + this.state.answer)
    event.preventDefault();
    this.resetAnswerField();
  }

  resetAnswerField = () => {
    this.setState({
        answer: '',
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

  handleNameChange = (event) => {
    this.setState({
        player: event.target.value,
    });
  }

  resetPlayerName = () => {
    this.setState({
        player: '',
    });
  }

  handlePlayerNameSubmit = (event) => {
      console.log('Player name and score submitted:' + this.state.player + this.state.score)
      event.preventDefault();
      this.resetPlayerName();
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
                player={this.state.player}
                gameSelected={this.state.gameSelected}
                gameStarted={this.state.gameStarted}
                gameEnded={this.state.gameEnded}
                roundEnded={this.state.roundEnded}
                round={this.state.round}
                answer={this.state.answer}
                handleChange={this.handleChange}
                handleGameStart={this.handleGameStart}
                handleGameSelection={this.handleGameSelection}
                onContinue={this.onContinue}
                onQuit={this.onQuit}
                handleNameChange={this.handleNameChange}
                handlePlayerNameSubmit={this.handlePlayerNameSubmit}
                handleAnswerSubmit={this.handleAnswerSubmit}
              />
          </div>
      )
    }
}

export default GameContainer;
