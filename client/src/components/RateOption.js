import React from 'react';

function RateOption({ option, userRating }) {
    return (
        <div className = 'rateOption' onClick = {() => userRating.current = option}>
            {option}
        </div>
    )
}

export default RateOption;