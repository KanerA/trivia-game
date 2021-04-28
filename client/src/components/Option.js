import React, { useState, useEffect } from "react";

export default function Option({option, index, setRate}) {
  return (
    <div key = {`option-${index}`}>
      <button onClick={() => setRate(true)}>{option}</button>
    </div>
  );
}