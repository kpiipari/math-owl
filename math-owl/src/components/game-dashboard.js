import React from 'react';

import GameStart from './game-start';
import GameContinue from './game-continue';
import GameSelection from '../containers/game-selection';
import GameDetail from '../containers/game-detail';
import Results from '../containers/results';
import EndGame from '../containers/end-game';
import RoundCount from '../containers/round-count';
import FaStar from 'react-icons/lib/fa/star';
import FaStarO from 'react-icons/lib/fa/star-o';

import { Divider, Grid, Segment } from 'semantic-ui-react';

class GameDashboard extends React.Component {
    
    render() {
        if (this.props.gameStarted && !this.props.roundEnded) {
            return (
                <div>
                    <Grid centered columns={2}>
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <GameDetail score={this.props.score} var1={this.props.round.var1} var2={this.props.round.var2}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <RoundCount score={this.props.score}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            );
        } else if (this.props.gameStarted && this.props.roundEnded && !this.props.gameEnded) {
            return (
                <div>
                    <Grid centered columns={2}>
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <Results score={this.props.score} time={this.props.time}/>
                                <GameContinue level={this.props.level} time={this.props.time}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            ); 
        } else if (!this.props.gameSelected){
            return (
                <div>
                    <Grid centered columns={2}>
                        <Grid.Row verticalAlign='middle'>
                            <GameSelection />
                        </Grid.Row>
                    </Grid>
                </div>
            )
        } else if (this.props.gameEnded){
            console.log(this.props.gameEnded)
            return (
                <div>
                    <Grid centered columns={2}>
                        <Grid.Row verticalAlign='middle'>
                            <EndGame score={this.props.score}/>
                        </Grid.Row>
                    </Grid>
                </div>
            )
        } else {
            return (
                <div>
                    <Grid centered columns={2}>
                        <Grid.Row verticalAlign='middle'>
                            <Divider hidden />
                            <GameStart />
                        </Grid.Row>
                    </Grid>
                </div>
            )
        }
    }
}

export default GameDashboard;