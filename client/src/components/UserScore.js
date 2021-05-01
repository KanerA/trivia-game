import React from 'react';

function UserScore({ score, correctAnswers, questionsAnswered}) {
    return (
        <div className='score-section'>
            You scored {correctAnswers} out of {questionsAnswered}
            {` & got ${score} points`}
        </div>
    );
}

export default UserScore;