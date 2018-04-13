import React from 'react';
import GameType from './game-type';
import Level from './level';

import { Header, Grid, Segment } from 'semantic-ui-react';

class SubHeader extends React.Component {
   
    render() {
        if (this.props.gameMode) {
            return (
                <Segment textAlign='center' inverted style={{ minHeight: 100, padding: '1em 1em' }} vertical>
                    <Grid centered columns={2}>
                        <Grid.Row centered columns={2}>
                            <Grid.Column>
                                <Header 
                                    as='h1' 
                                    textAlign='center'
                                    inverted
                                    style={{
                                    fontSize: '4em',
                                    fontWeight: 'normal',
                                    marginBottom: 0,
                                    marginTop: '0em',
                                    }} >
                                    <GameType game={this.props.game}/>
                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header 
                                    as='h1' 
                                    textAlign='center'
                                    inverted
                                    style={{
                                    fontSize: '4em',
                                    fontWeight: 'normal',
                                    marginBottom: 0,
                                    marginTop: '0em',
                                    }} >
                                    <Level level={this.props.level}/>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            );
        } else {
            return (
                <Segment textAlign='center' inverted style={{ minHeight: 100, padding: '1em 1em' }} vertical>
                    <Grid centered columns={1}>
                        <Grid.Column>
                            <Header     
                                as='h1' 
                                textAlign='center'
                                inverted
                                style={{
                                fontSize: '4em',
                                fontWeight: 'normal',
                                marginBottom: 0,
                                marginTop: '0em',
                                }}>   
                                Choose Game
                            </Header>
                        </Grid.Column>
                    </Grid>
                </Segment>
            );
        }
    }
}

export default SubHeader;