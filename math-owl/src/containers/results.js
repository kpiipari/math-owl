import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

class Results extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Row centered columns={4}>
                    <Grid.Column>
                        <Header as='h2'>
                            Score: {this.props.score}
                        </Header>
                        <Header as='h2'>
                            Time: {this.props.time}
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Results;