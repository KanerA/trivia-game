import React from 'react';

function RateOption({ option, onClick }) {
    return (
        <div className = 'rateOption' onClick = {onClick}>
            {option}
        </div>
    )
}

export default RateOption;