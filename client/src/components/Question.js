import React, { useState, useEffect } from "react";
import Option from './Option.js';

export default function Question({ currentQuestion, questionsAnswered, setRate }) {

  return (<>
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {questionsAnswered + 1}</span>
          </div>
          <div className='question-text'>{currentQuestion.question}</div>
        </div>
        <div className = 'answer-section'>
          {
            currentQuestion.options && currentQuestion.options.map((option, index) => (
              <Option option = {option} index = {index} setRate = {setRate} />
            ))
          }
        </div>
    </>
  );
}