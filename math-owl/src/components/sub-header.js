import React from 'react';
import GameType from './game-type';
import Level from './level';
import Message from './message';

import { Header, Grid, Segment } from 'semantic-ui-react';

class SubHeader extends React.Component {
   
    render() {
        if (this.props.gameMode) {
            return (
                <Segment>
                    <Grid centered columns={2}>
                        <Grid.Row centered columns={2}>
                            <Grid.Column>
                                <Header as='h1' textAlign='center'>
                                    <GameType game={this.props.game}/>
                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h1' textAlign='center'>
                                    <Level level={this.props.level}/>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            );
        } else {
            return (
                <Segment>
                    <Grid centered columns={1}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center'>
                                <Message message="Welcome to Math Owl"/>
                            </Header>
                        </Grid.Column>
                    </Grid>
                </Segment>
            );
        }
    }
}

export default SubHeader;