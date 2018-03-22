import React from 'react';
import GameStart from '../containers/game-start';
import GameDetail from '../containers/game-detail';
import Results from '../containers/results';
import EndGame from '../containers/end-game';

class Game extends React.Component {
    render() {
        return (
            /*<GameStart />*/
            /*<GameDetail />*/
            <div>
                <Results score="8" time="10 sec" />
                <EndGame />
            </div>
        );
    }
}

export default Game;