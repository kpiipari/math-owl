import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Button, Grid, Row } from 'react-bootstrap';

class EndGame extends React.Component {
    render() {
        return (
           
            <Grid>
                <Row>
                <Col xs={8} md={6} xsOffset={2}>
                    <h4>Enter name to add your results to the Leaderboard</h4>
                </Col>
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalEmail" className="form-group-lg row">
                            <Col xs={4} md={4} xsOffset={2}>
                                <FormControl type="answer" placeholder="Answer" />
                            </Col>
                            <Col xs={8} md={6} xsOffset={2}>
                                <Button type="submit" className="btn btn-md">Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Row>
            </Grid>
            
        );
    }
}

export default EndGame;