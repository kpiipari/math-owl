import React from 'react'
import { Header, Table, Segment, Grid } from 'semantic-ui-react'


class Leaderboard extends React.Component {
    

    generateLeaderboard() {
        if (this.props.error) {
            return <p>Sorry! Unable to load the leaderboard data</p>;  
        } if (this.props.loading) {
            return (
                <div>
                    <Table.Row>
                    <Table.Cell>
                    <Header as='h4' inverted>
                        <Header.Content>
                            loading...
                        </Header.Content>
                    </Header>
                    </Table.Cell>
                    <Table.Cell>
                        loading...
                    </Table.Cell>
                    <Table.Cell>
                        loading...
                    </Table.Cell>
                    </Table.Row>
                </div>
            )
        } else {
        const data = this.props.players;
        console.log(data)
        return (
            data.map((player, index) =>
                <div key={index + 1}>
                    <Table.Row>
                    <Table.Cell>
                     {index + 1}
                    </Table.Cell>
                    <Table.Cell>
                        {player.name}
                    </Table.Cell>
                    <Table.Cell>
                        {player.total_score}
                    </Table.Cell>
                    </Table.Row>
                </div>
            ))
        }
    } 

    render() { 
    return (
        <Segment textAlign='center' style={{ minHeight: 300, padding: '6em 8em' }} vertical>
            <Grid centered columns={2}>
                <Grid.Row verticalAlign='middle'>
                    <Table size='large' inverted celled collapsing>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Rank</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Score</Table.HeaderCell>
                            <Table.HeaderCell>Time</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                {this.generateLeaderboard()}
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Grid.Row>
            </Grid>
        </Segment>
    )}    
}

export default Leaderboard;