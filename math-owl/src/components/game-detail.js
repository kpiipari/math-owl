import React from 'react';
import { Form, Button, Segment, Header } from 'semantic-ui-react';
import GameOperand from './game-operand';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAdditionRound } from '../actions/actions'

class GameDetail extends React.Component {

    componentDidMount() {
        this.props.fetchAdditionRound()
    }

   roundJSON() {
       let data = this.props.round
       if (data.rounds !== undefined) {
            let num1 = data.rounds.round1.num1
            console.log(num1)
       } else {
           let num1 = ""
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
                                    > {this.roundJSON()} <GameOperand game={this.props.game}/> {this.roundJSON()} =
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAdditionRound: () => dispatch(fetchAdditionRound())
    };
};

export default connect(mapDispatchToProps)(GameDetail);

