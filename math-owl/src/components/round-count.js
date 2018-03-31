import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

class RoundCount extends React.Component {
    render() {
        return (
            <Grid centered>
                <Grid.Row verticalAlign='middle'>
                    <Grid.Column>
                        {Array.from({ length: this.props.score}, (v, k) => <Icon key={k} name='star' color='yellow' size='big'></Icon>)}
                        {Array.from({ length: 10 - this.props.score}, (v, k) => <Icon key={k} name='star' color='white' size='big'></Icon>)}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default RoundCount;