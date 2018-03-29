import React from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react';
import FaStar from 'react-icons/lib/fa/star';
import FaStarO from 'react-icons/lib/fa/star-o';

class RoundCount extends React.Component {
    render() {
        return (
            <Grid centered>
                <Grid.Row verticalAlign='middle'>
                    <Grid.Column>
                    {Array.from({ length: this.props.score}, (v, k) => <FaStar key={k} size={42}></FaStar>)}
                    {Array.from({ length: 10 - this.props.score}, (v, k) => <FaStarO key={k} size={42}></FaStarO>)}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default RoundCount;