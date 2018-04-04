import React from 'react';
import { Icon, Header, Segment } from 'semantic-ui-react';

class GameStart extends React.Component {
    render() {
        return (
            <div>
                <Segment textAlign='center' style={{ minHeight: 100, padding: '6em 6em' }} vertical>
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
                        <Icon name='play' onClick={this.props.handleGameStart}/>
                        Start
                    </Header>
                </Segment>
            </div>
        );
    }
}

export default GameStart;