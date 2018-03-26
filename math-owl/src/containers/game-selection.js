import React from 'react';
import { Col, Button, Grid, Row } from 'react-bootstrap';

class GameSelection extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={8} md={6} xsOffset={2}>
                            <h2>Select a Game to play</h2>
                        </Col>
                        <Col xs={8} md={6} xsOffset={2}>
                            <Button type="submit" className="btn btn-md">Addition</Button>
                        </Col>
                        <Col xs={8} md={6} xsOffset={2}>
                            <Button type="submit" className="btn btn-md">Substraction</Button>
                        </Col>
                        <Col xs={8} md={6} xsOffset={2}>
                            <Button type="submit" className="btn btn-md">Multiplication</Button>
                        </Col>
                        <Col xs={8} md={6} xsOffset={2}>
                            <Button type="submit" className="btn btn-md">Division</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default GameSelection;