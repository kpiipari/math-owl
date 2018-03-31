import React from 'react';
import { Form, Input, Button, Container } from 'semantic-ui-react';

class EndGame extends React.Component {
    render() {
        return (
            <Container>
                    <Form size={'large'}>
                        <Form.Group>
                            <Form.Field inline>
                                <label>Your score: {this.props.score}</label>
                                <Input placeholder='Your name' />
                            </Form.Field>
                            <Button type='submit'>Submit Score</Button>
                        </Form.Group>
                    </Form>
            </Container>
        );
    }
}

export default EndGame;