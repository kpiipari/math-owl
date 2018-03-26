import React from 'react';
import { Col, Button, Grid, Row } from 'react-bootstrap';

class GameStart extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={8} md={6} xsOffset={2}>
                            <Button type="submit" className="btn btn-md">Start</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default GameStart;