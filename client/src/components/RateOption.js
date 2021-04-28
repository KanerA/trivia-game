import React from 'react';

function RateOption({ option, onRateOptionClick }) {
    return (
        <div className = 'rateOption' onClick = {onRateOptionClick}>
            {option}
        </div>
    )
}

export default RateOption;