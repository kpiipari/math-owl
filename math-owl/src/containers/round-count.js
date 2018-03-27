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
                        {Array.from({ length: this.props.score}, (v, k) => <FaStar key={k} size={42}></FaStar>)}
                        {Array.from({ length: 10 - this.props.score}, (v, k) => <FaStarO key={k} size={42}></FaStarO>)}
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default RoundCount;