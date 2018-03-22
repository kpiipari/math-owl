import React from 'react';
import { Row, Grid, Col, Button } from 'react-bootstrap';
import EndGame from './end-game';

class Results extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={8} md={6} xsOffset={2}>
                        <h2>Score: {this.props.score}</h2>
                        <h2>Time: {this.props.time}</h2>
                        <Button type="submit" className="btn btn-md">Continue playing...</Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Results;