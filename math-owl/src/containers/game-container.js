import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAdditionRound, gameSelected, gameType, gameStarted, gameEnded, answer, 
    incrementRoundCounter, incrementLevel, additionGame, subtractionGame, multiplyGame, 
    addPlayer, submitAnswer, updateScore, roundEnded, resetRoundCounter, resetScore, 
    submitPlayerName, associatePlayerToGame, updateGameWithPlayerId } from '../actions/actions'

import SubHeader from '../components/sub-header';
import GameDashboard from './game-dashboard';



class GameContainer extends Component {

    handleGameSelection = (event) => {
        this.props.gameSelection(true);
        if (event.target.id === "Add") {
            this.props.additionGame();
        } else if (event.target.id === "Subtract") {
            this.props.subtractionGame();
        } else {
            this.props.multiplyGame();
        }
    }

    handleGameStart = () => {
        this.props.gameStart(true);
    }

    handleChange = (event) => {
        this.props.answerSupply(event.target.value);
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
        this.props.resetRoundCounter();
    }

    resetAnswerField = () => {
        this.props.answerSupply('');
    }

    onContinue = () => {
        this.props.incrementLevel();
        this.props.gameStart(false);
        this.props.roundEnd(false);
        this.props.resetScore();
        this.props.fetchAdditionRound();
    }

    onQuit = () => {
        this.props.gameEnd(true)
    }

    handleNameChange = (event) => {
        this.props.playerNameChange(event.target.value);
    }

    resetPlayerName = () => {
        this.props.playerNameChange('');
    }

    /*handlePlayerNameSubmit = (event) => {
        event.preventDefault();
        let playerName = this.props.player
        let gameID = this.props.round.id

        this.props.submitPlayerName(playerName);   
        this.resetPlayerName();
    }*/

   handlePlayerNameSubmit = (event) => {
        event.preventDefault();
        const playerName = this.props.player;
        const gameID = this.props.round.id;
        console.log(playerName)
        console.log(gameID)
        this.props.submitPlayerName(playerName)
        .then(player => this.props.updateGameWithPlayerId(player.id, gameID))
        .then()
        .then(this.resetPlayerName())
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
                    fetchAdditionRound={this.props.fetchAdditionRound}
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
        roundCount: state.roundCount,
        playerId: state.playerId,
        total_score: state.updatePlayerTotalScore
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
        resetRoundCounter: resetRoundCounter,
        resetScore: resetScore,
        submitPlayerName: submitPlayerName,
        associatePlayerToGame: associatePlayerToGame,
        updateGameWithPlayerId: updateGameWithPlayerId
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps )(GameContainer);
