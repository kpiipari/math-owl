import React from 'react';

class GameOperand extends React.Component {
    render() {
        if (this.props.game === "addition") {
            return (
                "+"
            );
        } else if (this.props.game === "subtraction") {
            return (
                "-"
            );
        } else {
            return (
                "*"
            );
        }
    }
}

export default GameOperand;