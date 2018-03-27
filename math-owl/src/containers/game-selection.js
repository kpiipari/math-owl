import React from 'react';
import { Icon, Header, Grid } from 'semantic-ui-react'

class GameSelection extends React.Component {
    render() {
        return (
            <div>
                
                <Grid centered columns={3}>
                    <Grid.Column>
                        <Header size='huge' color='purple'>Choose Game</Header>
                    </Grid.Column>
                    <Grid.Row centered columns={4}>
                        <Grid.Column>
                            <Header as='h2' icon>
                                <Icon name='plus' />
                                Add
                            </Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h2' icon>
                                <Icon name='minus' size='massive' />
                                Substract
                            </Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h2' icon>
                                <Icon name='asterisk' size='massive' /> 
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