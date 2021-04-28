import React from 'react';

function RateQuestion({onRateClick, onSkipClick}) {
    return (
        <div className = 'rateQuestion'>
            <div className = 'rateTitle'>
                Rate the question!
            </div>
            <div className = 'rateButton'>
                <button onClick = {onRateClick}>Rate!</button>
                <button onClick = {onSkipClick}>Skip</button>
            </div>
        </div>
    );
}

export default RateQuestion;