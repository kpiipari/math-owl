import React from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

class RoundCount extends React.Component {
    render() {
        return (
            <Segment textAlign='center' style={{ minHeight: 100 }} vertical>
                {Array.from({ length: this.props.score}, (v, k) => <Icon key={k} name='star' color='yellow' size='huge'></Icon>)}
                {Array.from({ length: 10 - this.props.score}, (v, k) => <Icon key={k} name='star' color='black' size='huge'></Icon>)}
            </Segment>
        )
    }
}

export default RoundCount;