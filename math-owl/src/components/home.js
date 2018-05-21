import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Button, Segment } from 'semantic-ui-react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
                    <Header
                        as='h1'
                        content='Welcome to Math Owl'
                        inverted
                        style={{
                        fontSize: '4em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: '3em',
                        }}
                    />
                    <Header
                        as='h2'
                        content='Improve your math skills by play'
                        inverted
                        style={{
                        fontSize: '1.7em',
                        fontWeight: 'normal',
                        marginTop: '1.5em',
                        }}
                    />
                    <Link to="/games">
                        <Button size='huge' color='orange'>
                            Get Started
                        </Button>
                    </Link>
                </Segment>             
                
            </div>
        );
    }
}

export default Home;