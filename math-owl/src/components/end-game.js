import React from 'react';
import { Form, Input, Button, Header, Segment } from 'semantic-ui-react';

class EndGame extends React.Component {
    render() {
        return (
            <div>
                <Header
                    as='h3'
                    inverted
                    style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '0.5em',
                    }}
                    >Your Score: {this.props.score}
                </Header>
                <Segment textAlign='center' style={{ minHeight: 20, padding: '2em 0em', marginLeft: '25%', marginRight: '25%' }} vertical>
                    <Form size={'large'} onSubmit={this.props.handlePlayerNameSubmit}>
                        <Form.Group>
                            <Form.Field inline>
                                <Input placeholder='Your name' value={this.props.player} onChange={this.props.handleNameChange}/>
                            </Form.Field>
                            <Button type="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </Segment>
        </div>
        );
    }
}

export default EndGame;