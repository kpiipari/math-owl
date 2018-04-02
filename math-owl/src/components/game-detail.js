import React from 'react';
import { Form, Input, Button, Container } from 'semantic-ui-react';

class GameDetail extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Form size={'huge'}>
                        <Form.Group>
                            <Form.Field inline>
                                <label>{this.props.var1} + {this.props.var2} =</label>
                                <Input placeholder='Answer' />
                            </Form.Field>
                            <Button type='submit' onClick={this.props.handleAnswerFormSubmit}>Submit</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default GameDetail;