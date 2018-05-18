import React from 'react';

class GameType extends React.Component {

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render() {
        return (
            <div>{this.capitalizeFirstLetter(this.props.game)}</div>
        );
    }
}

export default GameType;