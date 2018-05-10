import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAdditionRound, gameSelected, gameType, gameStarted, answer } from '../actions/actions'

import SubHeader from '../components/sub-header';
import GameDashboard from './game-dashboard';


class GameContainer extends Component {

  componentDidMount() {
      this.props.fetchAdditionRound()
  }

  handleGameSelection = (event) => {
      this.props.gameStarted()
      this.props.gameType(event.target.id)
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
                round={this.props.fetchAdditionRound}
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
    return {
        round: state.round,
        game: state.game,
        level: state.level,
        gameSelected: state.gameSelected,
        score: state.score,
        time: state.time,
        player: state.player,
        gameStarted: state.gameStarted,
        gameEnded: state.gameEnded,
        roundEnded: state.roundEnded,
        answer: state.answer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        gameType: gameType,
        gameSelected: gameSelected,
        gameStarted: gameStarted,
        answer: answer,
        fetchAdditionRound: fetchAdditionRound
        
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps )(GameContainer);
