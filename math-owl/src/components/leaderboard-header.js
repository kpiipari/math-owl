import React from 'react';
import Message from './message';

import { Header, Grid, Segment } from 'semantic-ui-react';

class LeaderboardHeader extends React.Component {
   
    render() {
        return (
            <Segment>
                <Grid centered columns={1}>
                    <Grid.Column>
                        <Header as='h1' textAlign='center'>
                            <Message message="Math Owl Leaderboard"/>
                        </Header>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default LeaderboardHeader;