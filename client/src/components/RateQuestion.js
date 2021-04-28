import React from 'react';
import RateOption from './RateOption';

const rateOptions = [
    1,2,3,4,5
]

function RateQuestion({onRateClick, onSkipClick, onRateOptionClick}) {
    return (
        <div className = 'rateQuestion'>
            <div className = 'rateTitle'>
                Rate the question!
            </div>
            <div className = 'rateOptions'>
                {
                    rateOptions.map(option => (
                        <RateOption option = {option} onClick = {() => onRateOptionClick(option)} />
                    ))
                }
            </div>
            <div className = 'rateButton'>
                <button onClick = {onRateClick}>Rate!</button>
                <button onClick = {onSkipClick}>Skip</button>
            </div>
        </div>
    );
}

export default RateQuestion;