import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAdditionRound, gameSelected, gameType, gameStarted, gameEnded, answer, roundTracker, incrementLevel, additionGame, subtractionGame, multiplyGame, addPlayer } from '../actions/actions'

import SubHeader from '../components/sub-header';
import GameDashboard from './game-dashboard';


class GameContainer extends Component {

  componentDidMount() {
      this.props.fetchAdditionRound()
    }

  handleGameSelection = (event) => {
      this.props.gameSelection(true)
      if (event.target.id === "Add") {
        this.props.additionGame()
      } else if (event.target.id === "Subtract") {
        this.props.subtractionGame()
      } else {
        this.props.multiplyGame()
      }
  }

  handleGameStart = () => {
    this.props.gameStart(true)
  }

  handleChange = (event) => {
      this.props.answerSupply(event.target.value)
  }

  handleAnswerSubmit = (event) => {
    //console.log('Answer submitted:' + this.props.answer)
    event.preventDefault();
    this.props.incrementRoundTracker()
    this.resetAnswerField();
  }

  resetAnswerField = () => {
    this.props.answerSupply('')
  }

  onContinue = () => {
    this.props.incrementLevel()
    this.props.gameStart(false)
  }

  onQuit = () => {
    this.props.gameEnd(true)
  }

  handleNameChange = (event) => {
    this.props.playerNameChange(event.target.value)
  }

  resetPlayerName = () => {
    this.props.playerNameChange('')
  }

  handlePlayerNameSubmit = (event) => {
      console.log('Player name and score submitted:' + this.props.player + this.props.score)
      event.preventDefault();
      this.resetPlayerName();
  }

  render() {
      return (
          <div>
              <SubHeader 
                game={this.props.game}
                level={this.props.level}
                gameSelected={this.props.gameSelected}
              />
              <GameDashboard 
                game={this.props.game}
                level={this.props.level}
                score={this.props.score}
                time={this.props.time}
                player={this.props.player}
                gameSelected={this.props.gameSelected}
                gameStarted={this.props.gameStarted}
                gameEnded={this.props.gameEnded}
                roundEnded={this.props.roundEnded}
                round={this.props.round}
                roundTracker={this.props.roundTracker}
                answer={this.props.answer}
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

const mapStateToProps = (state) => {
    console.log(state)
    return {
        round: state.round,
        game: state.gameType,
        level: state.level,
        gameSelected: state.gameSelected,
        score: state.incrementScore,
        time: state.time,
        player: state.player,
        gameStarted: state.gameStarted,
        gameEnded: state.gameEnded,
        roundEnded: state.roundEnded,
        answer: state.answer,
        roundTracker: state.roundTracker
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        gameType: gameType,
        gameSelection: gameSelected,
        gameStart: gameStarted,
        gameEnd: gameEnded,
        answerSupply: answer,
        fetchAdditionRound: fetchAdditionRound,
        incrementRoundTracker: roundTracker,
        incrementLevel: incrementLevel,
        additionGame: additionGame,
        subtractionGame: subtractionGame,
        multiplyGame: multiplyGame,
        playerNameChange: addPlayer

        
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps )(GameContainer);
