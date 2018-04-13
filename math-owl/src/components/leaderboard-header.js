import React from 'react';

import { Header, Grid, Segment } from 'semantic-ui-react';

class LeaderboardHeader extends React.Component {
   
    render() {
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
                                Leaderboard
                            </Header>
                        </Grid.Column>
                    </Grid>
            </Segment>
        );
    }
}

export default LeaderboardHeader;