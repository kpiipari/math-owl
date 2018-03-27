import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Button } from 'react-bootstrap';
import RoundCount from './round-count';

class GameDetail extends React.Component {
    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail" className="form-group-lg row">
                    <Col componentClass={ControlLabel} sm={4}>
                        2 + 2 =
                    </Col>
                    <Col sm={2}>
                        <FormControl type="answer" placeholder="Answer" />
                    </Col>
                    <Col sm={2}>
                        <Button type="submit" className="btn btn-md">Submit</Button>
                    </Col>
                </FormGroup>
                <RoundCount score={this.props.score}/>
            </Form>
        );
    }
}

export default GameDetail;