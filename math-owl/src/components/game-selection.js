import React from 'react';
import { Icon, Header, Grid, Segment } from 'semantic-ui-react'

class GameSelection extends React.Component {
    render() {
        return (
            <div>
                <Grid centered columns={2}>
                    <Grid.Column>
                        <Segment vertical>
                            <Header size={'huge'} textAlign='center' color='purple'>Choose Game</Header>
                        </Segment>
                    </Grid.Column>
                    <Grid.Row centered columns={4}>
                        <Grid.Column>
                            <Header as='h2' icon>
                                <Icon name='plus' id="Add" size='massive' onClick={this.props.handleGameSelection}/>
                                Add
                            </Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h2' icon>
                                <Icon name='minus' id="Substract" size='massive' onClick={this.props.handleGameSelection}/>
                                Substract
                            </Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h2' icon>
                                <Icon name='asterisk' id="Multiply" size='massive' onClick={this.props.handleGameSelection}/> 
                                Multiply
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default GameSelection;