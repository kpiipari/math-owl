import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAdditionRound, gameSelected, gameType, gameStarted, gameEnded, answer, incrementRoundCounter, incrementLevel, additionGame, subtractionGame, multiplyGame, addPlayer, submitAnswer, updateScore, roundEnded, resetRoundCounter } from '../actions/actions'

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
        event.preventDefault();
        const id = this.props.round.id;
        const answer = this.props.answer;
        this.props.submitAnswer(id, answer);
        this.props.incrementRoundCounter();
        const roundCount = this.props.roundCount;
        this.resetAnswerField();
        if (roundCount === 10 ) {
            //this.props.incrementLevel();
            this.endRound();
        }  
    }

    endRound = () => {
        this.props.roundEnd(true);
        this.props.resetRoundCounter()
    }

    resetAnswerField = () => {
        this.props.answerSupply('');
    }

    onContinue = () => {
        this.props.incrementLevel()
        this.props.gameStart(false)
        this.props.roundEnd(false)
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
                    roundEnded={this.props.roundEnded}
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
                    roundCount={this.props.roundCount}
                    answer={this.props.answer}
                    handleChange={this.handleChange}
                    handleGameStart={this.handleGameStart}
                    handleGameSelection={this.handleGameSelection}
                    onContinue={this.onContinue}
                    onQuit={this.onQuit}
                    roundEnd={this.endRound}
                    handleNameChange={this.handleNameChange}
                    handlePlayerNameSubmit={this.handlePlayerNameSubmit}
                    handleAnswerSubmit={this.handleAnswerSubmit}
                    setVariables={this.setVariables}
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
        score: state.score,
        time: state.time,
        player: state.player,
        gameStarted: state.gameStarted,
        gameEnded: state.gameEnded,
        roundEnded: state.roundEnded,
        answer: state.answer,
        roundCount: state.roundCount
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        gameType: gameType,
        gameSelection: gameSelected,
        gameStart: gameStarted,
        gameEnd: gameEnded,
        roundEnd: roundEnded,
        answerSupply: answer,
        fetchAdditionRound: fetchAdditionRound,
        incrementRoundCounter: incrementRoundCounter,
        incrementLevel: incrementLevel,
        additionGame: additionGame,
        subtractionGame: subtractionGame,
        multiplyGame: multiplyGame,
        playerNameChange: addPlayer,
        submitAnswer: submitAnswer,
        updateScore: updateScore,
        resetRoundCounter: resetRoundCounter
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps )(GameContainer);
