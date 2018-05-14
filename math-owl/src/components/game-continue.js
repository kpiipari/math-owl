import React from 'react';
import { Button, Segment } from 'semantic-ui-react';

class GameContinue extends React.Component {
    render() {
        return (
            <Segment textAlign='center' style={{ minHeight: 100, padding: '3em 0em' }} vertical>
                <Button.Group size={'large'}>
                        <Button positive onClick={this.props.onContinue}>Level {this.props.level + 1}</Button>
                        <Button.Or />
                        <Button onClick={this.props.onQuit}>Quit</Button>
                    </Button.Group>
            </Segment>
        );
    }
}

export default GameContinue;