import React from 'react';
import { Icon, Header } from 'semantic-ui-react';

class GameStart extends React.Component {
    render() {
        return (
            <div>
                <Header as='h2' icon>
                    <Icon name='play' color='purple' onClick={this.props.handleGameStart}/>
                        Start
                </Header>
            </div>
        );
    }
}

export default GameStart;