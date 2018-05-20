import React from 'react'
import { Header, Table, Segment, Grid } from 'semantic-ui-react'


class Leaderboard extends React.Component {
    

    leaderboardDetails() {
        const data = this.props.players;
        console.log(data)
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
                        <Table.Cell>
                        <Header as='h4' inverted>
                            <Header.Content>
                                1
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell>
                            {this.leaderboardDetails()}
                        </Table.Cell>
                        <Table.Cell>
                            100
                        </Table.Cell>
                        <Table.Cell>
                            5 min
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                        <Header as='h4' inverted>
                            <Header.Content>
                                2
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell>
                            Rosalind Franklin
                        </Table.Cell>
                        <Table.Cell>
                            950
                        </Table.Cell>
                        <Table.Cell>
                            6 min
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                        <Header as='h4' inverted>
                            <Header.Content>
                                3
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell>
                            Marie Curie
                        </Table.Cell>
                        <Table.Cell>
                            70
                        </Table.Cell>
                        <Table.Cell>
                            4 min
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                        <Header as='h4' inverted>
                            <Header.Content>
                                4
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell>
                            Ada Lovelace
                        </Table.Cell>
                        <Table.Cell>
                            50
                        </Table.Cell>
                        <Table.Cell>
                            3 min
                        </Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
            </Grid.Row>
        </Grid>
    </Segment>
    )}    
}

export default Leaderboard;