import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

class GameContinue extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Row centered columns={2}>
                    <Button.Group size={'large'}>
                        <Button positive onClick={this.props.onContinue}>Level {this.props.level + 1}</Button>
                        <Button.Or />
                        <Button>Quit</Button>
                    </Button.Group>
                </Grid.Row>
            </Grid>
        );
    }
}

export default GameContinue;