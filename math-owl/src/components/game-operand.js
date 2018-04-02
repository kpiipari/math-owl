import React from 'react';

class GameOperand extends React.Component {
    render() {
        if (this.props.game === "Add") {
            return (
                "+"
            );
        } else if (this.props.game === "Substract") {
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