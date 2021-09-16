import React from "react";
import RateOption from "./RateOption";

const rateOptions = [1, 2, 3, 4, 5];

function RateQuestion({ onClick, userRating }) {
  return (
    <div className="rateQuestion">
      <div className="rateTitle">Rate the question!</div>
      <div className="rateOptions">
        {rateOptions.map((option, index) => (
          <RateOption
            key={`option-${index}`}
            option={option}
            userRating={userRating}
          />
        ))}
      </div>
      <div className="rateButtons">
        <button className="rateButton rate" onClick={() => onClick(true)}>
          Rate!
        </button>
        <button className="rateButton skip" onClick={() => onClick(false)}>
          Skip
        </button>
      </div>
    </div>
  );
}

export default RateQuestion;
