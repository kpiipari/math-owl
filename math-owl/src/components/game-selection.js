import React from 'react';
import { Icon, Header, Grid, Segment } from 'semantic-ui-react'

class GameSelection extends React.Component {
    render() {
        return (
            <div>
                <Segment textAlign='center' style={{ minHeight: 300, padding: '6em 8em' }} vertical>
                    <Grid>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                                <Header as='h1' icon>
                                    <Icon name='plus' id="Add" size='massive' onClick={this.props.handleGameSelection}/>
                                    Add
                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h1' icon>
                                    <Icon name='minus' id="Substract" size='massive' onClick={this.props.handleGameSelection}/>
                                    Substract
                                </Header>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h1' icon>
                                    <Icon name='asterisk' id="Multiply" size='massive' onClick={this.props.handleGameSelection}/> 
                                    Multiply
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

export default GameSelection;