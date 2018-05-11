import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAdditionRound, gameSelected, gameType, gameStarted, answer, roundTracker, incrementRoundTracker, additionGame, subtractionGame, multiplyGame } from '../actions/actions'

import SubHeader from '../components/sub-header';
import GameDashboard from './game-dashboard';


class GameContainer extends Component {

  componentDidMount() {
      this.props.fetchAdditionRound()
    }

  handleGameSelection = (event) => {
      this.props.gameStarted()
      if (event.target.id === "Add") {
        this.props.additionGame()
      } else if (event.target.id === "Subtract") {
        this.props.subtractionGame()
      } else {
        this.props.multiplyGame()
      }
  }

  handleGameStart = () => {
    this.props.gameStarted()
  }

  handleChange = (event) => {
      this.props.answer(event.target.value)
  }

  handleAnswerSubmit = (event) => {
    //console.log('Answer submitted:' + this.props.answer)
    event.preventDefault();
    this.props.incrementRoundTracker()
    this.resetAnswerField();
  }

  resetAnswerField = () => {
    this.setprops({
        answer: '',
    });
  }

  onContinue = () => {
    this.setState({
        level: this.props.level + 1,
        gameStarted: false
    });
  }

  onQuit = () => {
    this.setState({
        gameEnded: true
    });
  }

  handleNameChange = (event) => {
    this.setprops({
        player: event.target.value,
    });
  }

  resetPlayerName = () => {
    this.setprops({
        player: '',
    });
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
                gameMode={this.props.gameSelected}
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
        gameSelected: gameSelected,
        gameStarted: gameStarted,
        answer: answer,
        fetchAdditionRound: fetchAdditionRound,
        incrementRoundTracker: incrementRoundTracker,
        additionGame: additionGame,
        subtractionGame: subtractionGame,
        multiplyGame: multiplyGame
        
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps )(GameContainer);
