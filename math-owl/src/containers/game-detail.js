import React from 'react';
import { Form, Input, Button, Container } from 'semantic-ui-react';
import RoundCount from './round-count';

class GameDetail extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Form size={'huge'}>
                        <Form.Field inline>
                            <label>{this.props.var1} + {this.props.var2} =</label>
                            <Input placeholder='Answer' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Container>
                <Container>
                    <RoundCount score={this.props.score}/>
                </Container>
            </div>
        );
    }
}

export default GameDetail;