import React from 'react';
import { Form, Input, Button, Segment, Header, Grid } from 'semantic-ui-react';
import GameOperand from './game-operand';

class GameDetail extends React.Component {

    render() {
        return (
            <div>
                 <Segment textAlign='center' style={{ minHeight: 20, padding: '3em 0em' }} vertical>
                    <Form>
                        <Form.Field>
                            <label>
                                <Header
                                    as='h3'
                                    inverted
                                    style={{
                                    fontSize: '4em',
                                    fontWeight: 'normal',
                                    }}
                                    >{this.props.var1} <GameOperand game={this.props.game}/> {this.props.var2} =
                                </Header>
                            </label>
                            
                        </Form.Field>
                        <Form.Field inline>
                            <input placeholder='Answer' type="text" value={this.props.answer} onChange={this.props.handleChange}/>
                        </Form.Field>
                        <Form.Field>
                            <Button type='submit' size='big' onClick={this.props.handleAnswerFormSubmit}>Submit</Button>      
                        </Form.Field>  
                    </Form>      
                </Segment>
            </div>
        );
    }
}

export default GameDetail;