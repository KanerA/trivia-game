import React from 'react';

function RateOption({ option, userRating }) {
    console.log(userRating);
    return (
        <div className = 'rateOption' onClick = {() => userRating = option}>
            {option}
        </div>
    )
}

export default RateOption;