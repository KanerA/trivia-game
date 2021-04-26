import React, { useState, useEffect } from "react";
import Option from './Option.js';

export default function Question({ question, options }) {

  return (
          <form action="/quiz/question/rate" method="post">
          <h1>{question}</h1>
          {options&&options.map(option =>
            <div>
              <input type="radio" id={option} name="option" value={option} />
              <label htmlFor={option}>{option}</label><br />
            </div>
          )}
          <input type="submit" value="Submit"></input>
        </form>
  );
}