import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

class EndGame extends React.Component {
    render() {
        return (
            <Form size={'large'}>
                <Form.Group>
                    <Form.Field inline>
                        <label>Your score: {this.props.score}</label>
                        <Input placeholder='Your name' onChange={this.props.handleNameChange}/>
                    </Form.Field>
                    <Button type='submit'>Submit Score</Button>
                </Form.Group>
            </Form>
        );
    }
}

export default EndGame;