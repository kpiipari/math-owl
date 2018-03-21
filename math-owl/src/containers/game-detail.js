import React from 'react';
import { Row, Grid, Form, FormGroup, ControlLabel, FormControl, Col, Button } from 'react-bootstrap';
import FaStar from 'react-icons/lib/fa/star';
import FaStarO from 'react-icons/lib/fa/star-o';

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
                <FaStar size={42}></FaStar>
                <FaStarO size={42}></FaStarO>
            </Form>
            
            
        );
    }
}

export default GameDetail;