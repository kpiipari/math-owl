import React from 'react';
import { Icon, Header } from 'semantic-ui-react';

class GameStart extends React.Component {
    render() {
        return (
            <div>
                <Header as='h2' icon>
                    <Icon name='play' onClick={this.props.handleGameStart}/>
                        Start
                </Header>
            </div>
        );
    }
}

export default GameStart;