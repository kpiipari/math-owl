import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';

class Results extends React.Component {
    render() {
        return (
            <div>
                <Header
                        as='h1'
                        inverted
                        style={{
                        fontSize: '4em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: '0.5em',
                        }}
                    >Score: {this.props.score}
                </Header>
                <Header
                        as='h1'
                        inverted
                        style={{
                        fontSize: '4em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: '0.5em',
                        }}
                    >Time: {this.props.time}
                </Header>
            </div>
        );
    }
}

export default Results;