import React from 'react';

import GameStart from '../components/game-start';
import GameContinue from '../components/game-continue';
import GameSelection from '../components/game-selection';
import GameDetail from '../components/game-detail';
import Results from '../components/results';
import EndGame from '../components/end-game';
import RoundCount from '../components/round-count';

import { Divider, Grid, Segment } from 'semantic-ui-react';

class GameDashboard extends React.Component {
    
 
    render() {
        if (this.props.gameStarted && !this.props.roundEnded) {
            return (
                <div>  
                    <GameDetail game={this.props.game} score={this.props.score} var1={this.props.round.var1} var2={this.props.round.var2} handleAnswerFormSubmit={this.props.handleAnswerFormSubmit} answer={this.props.answer} handleChange={this.props.handleChange}/>
                    <RoundCount score={this.props.score}/>     
                </div>
            );
        } else if (this.props.gameStarted && this.props.roundEnded && !this.props.gameEnded) {
            return (
                <div>
                    <Segment textAlign='center' style={{ minHeight: 100, padding: '2em 0em' }} vertical>
                        <Results score={this.props.score} time={this.props.time}/>
                        <GameContinue level={this.props.level} time={this.props.time} onContinue={this.props.onContinue} onQuit={this.props.onQuit}/>
                    </Segment>
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
            return (
                <div>
                    <Segment textAlign='center' style={{ minHeight: 20, padding: '3em 0em', marginLeft: '20%', marginRight: '20%' }} vertical>
                        <EndGame score={this.props.score} handleNameChange={this.props.handleNameChange}/>
                    </Segment>
                </div>
            )
        } else {
            return (
                <div>
                    <Grid centered columns={2}>
                        <Grid.Row verticalAlign='middle'>
                            <GameStart handleGameStart={this.props.handleGameStart}/>
                        </Grid.Row>
                    </Grid>
                </div>
            )
        }
    }
}

export default GameDashboard;