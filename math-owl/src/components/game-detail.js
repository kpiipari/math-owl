import React from 'react';
import { Form, Input, Button, Segment } from 'semantic-ui-react';
import GameOperand from './game-operand';

class GameDetail extends React.Component {

    render() {
        return (
            <div>
                 <Segment textAlign='center' style={{ minHeight: 20, padding: '3em 0em', marginLeft: '25%', marginRight: '25%' }} vertical>
                    <Form size={'huge'}>
                        <Form.Group>
                            <Form.Field inline>
                                <label>{this.props.var1} <GameOperand game={this.props.game}/> {this.props.var2} =</label>
                                <Input placeholder='Answer' type="text" value={this.props.answer} onChange={this.props.handleChange}/>
                            </Form.Field>
                            <Button type='submit' onClick={this.props.handleAnswerFormSubmit}>Submit</Button>
                        </Form.Group>
                    </Form>
                </Segment>
            </div>
        );
    }
}

export default GameDetail;