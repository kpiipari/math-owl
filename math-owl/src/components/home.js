import React from 'react';
import { Header, Container, Button } from 'semantic-ui-react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Header as='h1'>
                        Improve your math skills by play
                    </Header>
                    <p>Practise addition, subtraction and multiplication</p>
                    <p>Submit your high score to the Leaderboard</p>
                    <Button size='huge' circular={true} >Start</Button>

                </Container>
            </div>
        );
    }
}

export default Home;