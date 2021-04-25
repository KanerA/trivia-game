import React, { useState, useEffect } from "react";
import Option from './Option.js';
export default function Question(props) {

  return (
    <div>
        <h1>{props.mockData.question}</h1>
      {props.mockData.answers.map(answer => <Option answer={answer} />)}
    </div>
  );
}