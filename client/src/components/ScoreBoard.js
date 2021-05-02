import React from 'react';
import ScoreBoardTitle from './ScoreBoardTitle';
import ScoreBoardUser from './ScoreBoardUser';

function ScoreBoard({ players }) {
    return (
        <div className = 'scoreBoard'>
            <ScoreBoardTitle />
            {
                players.map((player, index) => {
                    <ScoreBoardUser playerScore = {player.score} playerName = {player.name} />
                })
            }
        </div>
    );
}

export default ScoreBoard;