import React from 'react';

import SubHeader from './sub-header';
import GameStart from './game-start';
import GameSelection from '../containers/game-selection';
import GameDetail from '../containers/game-detail';
import Results from '../containers/results';
import EndGame from '../containers/end-game';

class GameDashboard extends React.Component {
    state = {
        level: 1,
        game: "Addition",
        score: 1,
        time: 0,
        gameSelected: false,
        gameStarted: true,
        gameEnded: false,
    };

    render() {
        if (this.state.gameStarted && !this.state.gameEnded) {
            return (
                <div>
                    <SubHeader 
                        game={this.state.game}
                        level={this.state.level}
                        gameMode={this.state.gameStarted}
                    />
                    <GameDetail score={this.state.score}/>
                </div>
            );
        } else if (this.state.gameStarted) {
            return (
            <div>
                <SubHeader 
                        game={this.state.game}
                        level={this.state.level}
                        gameMode={this.state.gameStarted}
                />
                <Results score="8" time="10 sec" />
                <EndGame />
            </div>
            ); 
        } else if (!this.state.gameSelected){
            return (
                <div>
                    <SubHeader 
                        game={this.state.game}
                        level={this.state.level}
                        gameMode={this.state.gameSelected}
                    />
                    <GameSelection />
                </div>
            )
        } else {
            return (
                <div>
                    <SubHeader 
                        game={this.state.game}
                        level={this.state.level}
                        gameMode={this.state.gameSelected}
                    />
                    <GameStart />
                </div>
            )
        }
    }
}

export default GameDashboard;