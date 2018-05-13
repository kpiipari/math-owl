import React from 'react';
import { Form, Button, Segment, Header } from 'semantic-ui-react';
import GameOperand from './game-operand';


class GameDetail extends React.Component {

    setVariables() {
        let roundCount= this.props.roundCount;
        const data = this.props.round
        if (data.rounds === undefined) {
            return ""
        } else {
            return {
                num1: data["rounds"][`round${roundCount}`]["num1"],
                num2: data["rounds"][`round${roundCount}`]["num2"]
                }
        }
    } 

    render() { 

        return (
            <div>
                 <Segment textAlign='center' style={{ minHeight: 20, padding: '3em 0em' }} vertical>
                    <Form onSubmit={this.props.handleAnswerSubmit}>
                        <Form.Field>
                            <label>
                                <Header
                                    as='h3'
                                    inverted
                                    style={{
                                    fontSize: '4em',
                                    fontWeight: 'normal',
                                    }}
                                    > {this.setVariables().num1} <GameOperand game={this.props.game}/> {this.setVariables().num2} =
                                </Header>
                            </label>
                            
                        </Form.Field>
                        <Form.Field inline>
                            <input placeholder='Answer' type="text" value={this.props.answer} onChange={this.props.handleChange}/>
                        </Form.Field>
                        <Form.Field>
                            <Button type='submit' size='big'>Submit</Button>      
                        </Form.Field>  
                    </Form>      
                </Segment>
            </div>
        );
    }
}


export default GameDetail;

