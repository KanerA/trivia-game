import React from 'react';
import RateOption from './RateOption';

const rateOptions = [
    1,2,3,4,5
]

function RateQuestion({onClick, onSkipClick, userRating}) {
    return (
        <div className = 'rateQuestion'>
            <div className = 'rateTitle'>
                Rate the question!
            </div>
            <div className = 'rateOptions'>
                {
                    rateOptions.map(option => (
                        <RateOption option = {option} userRating = {userRating} />
                    ))
                }
            </div>
            <div className = 'rateButton'>
                <button onClick = {() => onClick(true)}>Rate!</button>
                <button onClick = {() => onClick(false)}>Skip</button>
            </div>
        </div>
    );
}

export default RateQuestion;