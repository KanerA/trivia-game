import React, { useState, useEffect } from "react";

export default function Option({option, index, handleAnswerOptionClick}) {
  return (
    <div key = {`option-${index}`}>
      <button onClick={() => handleAnswerOptionClick(option)}>{option}</button>
    </div>
  );
}