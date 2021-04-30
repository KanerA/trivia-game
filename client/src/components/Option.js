import React, { useState, useEffect } from "react";

export default function Option({option, index, setRateTheQuestion}) {
  return (
    <div key = {`option-${index}`}>
      <button className='option' onClick={() => setRateTheQuestion(true)}>{option}</button>
    </div>
  );
}