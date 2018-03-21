import React from 'react';
import { Row, Grid, Col } from 'react-bootstrap';
import FaStar from 'react-icons/lib/fa/star';
import FaStarO from 'react-icons/lib/fa/star-o';

class RoundCount extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={8} md={6} xsOffset={2}>
                        <FaStarO size={42}></FaStarO>
                        <FaStarO size={42}></FaStarO>
                        <FaStarO size={42}></FaStarO>
                        <FaStarO size={42}></FaStarO>
                        <FaStarO size={42}></FaStarO>
                        <FaStarO size={42}></FaStarO>
                        <FaStarO size={42}></FaStarO>
                        <FaStarO size={42}></FaStarO>
                        <FaStarO size={42}></FaStarO>
                        <FaStarO size={42}></FaStarO>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default RoundCount;