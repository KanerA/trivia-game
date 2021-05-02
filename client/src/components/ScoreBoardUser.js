import React from 'react';

function ScoreBoardUser({name, score}) {
    return (
        <div className = 'scoreBoardUser'>
            <div className = 'name boardCell playerName'>{name}</div>
            <div className = 'score boardCell playerScore'>{score}</div>
        </div>
    );
}

export default ScoreBoardUser;