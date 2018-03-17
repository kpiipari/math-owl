import React from 'react';

class GameStart extends React.Component {
    render() {
        return (
            <div>
                <h2>Select a Game to play</h2>
            
                <button>Addition</button>
                <button>Substraction</button>
                <button>Multiplication</button>
                <button>Division</button>
            </div>
        );
    }
}

export default GameStart;