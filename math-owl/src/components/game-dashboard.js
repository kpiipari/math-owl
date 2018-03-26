import React from 'react';
import Header from './header';
import SubHeader from './sub-header';
import GameStart from '../containers/game-start';
import GameDetail from '../containers/game-detail';
import Results from '../containers/results';
import EndGame from '../containers/end-game';

class GameDashboard extends React.Component {
    render() {
        return (
            /*<GameStart />*/
            /*<GameDetail />*/
            <div>
                <Header />
                <SubHeader />
                <Results score="8" time="10 sec" />
                <EndGame />
            </div>
        );
    }
}

export default GameDashboard;