import React, { useState, useEffect } from "react";
import Option from './Option.js';

export default function Question({ data }) {
  console.log(data);
  const questionData = data[0];
  if(!data || data === []) return <div>
    nothing
  </div>;

  return (
          <form action="/quiz/question/rate" method="post">
          <h1>{questionData.question}</h1>
          {questionData.options&&questionData.options.map(option =>
            <div>
              <input type="radio" id={option} name="option" value={option} />
              <label for={option}>{option}</label><br />
            </div>
          )}
          <input type="submit" value="Submit"></input>
        </form>
  );
}