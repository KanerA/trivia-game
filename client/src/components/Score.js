import React from 'react';

function Score({ score, player }) {
    return (
        <div className = 'scoreContainer'>
            {`${player} has ${score} points`}
        </div>
    );
}

export default Score;