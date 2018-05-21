import React from 'react';
import { Header } from 'semantic-ui-react';

class ThankYou extends React.Component {
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
                    >Thanks for playing MathOwl!
                </Header>
            </div>
        );
    }
}

export default ThankYou;