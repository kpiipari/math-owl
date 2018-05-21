import React from 'react'
import { Table, Segment, Grid } from 'semantic-ui-react'


class Leaderboard extends React.Component {
    

    generateLeaderboard() {
        if (this.props.error) {
            return <p>Sorry! Unable to load the leaderboard data</p>;  
        } if (this.props.loading) {
            return (
                <Table.Row>
                    <Table.Cell>
                        loading...
                    </Table.Cell>
                    <Table.Cell>
                        loading...
                    </Table.Cell>
                    <Table.Cell>
                        loading...
                    </Table.Cell>
                </Table.Row>
            )
          } else {
            const data = this.props.players;
            console.log(data)
            return (
                data.map((player, index) =>
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
                ))
            }
    } 

    render() { 
    return (
        <Segment textAlign='center' style={{ minHeight: 300, padding: '6em 8em' }} vertical>
            <Grid centered columns={2}>
               
                    <Table inverted>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Rank</Table.HeaderCell>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Score</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.generateLeaderboard()}
                        </Table.Body>
                    </Table>
              
            </Grid>
        </Segment>
    )}    
}

export default Leaderboard;