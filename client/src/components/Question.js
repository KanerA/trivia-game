import React, { useState, useEffect } from "react";
import Option from './Option.js';
export default function Question(props) {

  return (
    // <div>
    //   {props.data.answers.map(answer => <Option answer={answer} />)}

    // </div>
          <form action="/info" method="post">
          <h1>{props.data.question}</h1>
          {props.data.answers.map(answer =>
          <div>
          <input type="radio" id={answer} name="answer" value={answer} />
          <label for={answer}>{answer}</label><br />
          </div>
          )}
          <input type="submit" value="Submit"></input>
        </form>
  );
}