import React from 'react';

function ScoreBoardUser({name, score}) {
    return (
        <div className = 'scoreBoardUser'>
            <div className = 'playerName'>{name}</div>
            <div className = 'playerScore'>{score}</div>
        </div>
    );
}

export default ScoreBoardUser;