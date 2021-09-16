import React, { useState } from "react";

function RateOption({ option, userRating }) {
  const [checkOption, setCheckOption] = useState(false);
  return (
    <div
      className={checkOption ? "rateOption optionSelected" : "rateOption"}
      onClick={() => {
        setCheckOption(!checkOption);
        return (userRating.current = option);
      }}
    >
      {option}
    </div>
  );
}

export default RateOption;
