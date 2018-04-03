import React from 'react';

import GameStart from '../components/game-start';
import GameContinue from '../components/game-continue';
import GameSelection from '../components/game-selection';
import GameDetail from '../components/game-detail';
import Results from '../components/results';
import EndGame from '../components/end-game';
import RoundCount from '../components/round-count';

import { Divider, Grid } from 'semantic-ui-react';

class GameDashboard extends React.Component {
    
 
    render() {
        if (this.props.gameStarted && !this.props.roundEnded) {
            return (
                <div>
                    <Grid centered columns={2}>
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <GameDetail game={this.props.game} score={this.props.score} var1={this.props.round.var1} var2={this.props.round.var2} handleAnswerFormSubmit={this.props.handleAnswerFormSubmit} answer={this.props.answer} handleChange={this.props.handleChange}/>
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
                                <GameContinue level={this.props.level} time={this.props.time} onContinue={this.props.onContinue} onQuit={this.props.onQuit}/>
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
                            <GameSelection handleGameSelection={this.props.handleGameSelection}/>
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
                            <GameStart handleGameStart={this.props.handleGameStart}/>
                        </Grid.Row>
                    </Grid>
                </div>
            )
        }
    }
}

export default GameDashboard;