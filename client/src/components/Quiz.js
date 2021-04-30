import React from 'react';
import Question from './Question';
import RateQuestion from './RateQuestion';

function Quiz({ questionsAnswered, correctAnswers, score,  currentQuestion, setUserAnswer, onClick, userRating, showScore, userAnswer }) {
    
    return (
        <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {correctAnswers} out of {questionsAnswered}
					{`& got ${score} points`}
				</div>
			) : userAnswer ? 
			<>	
				<Question currentQuestion = {currentQuestion} questionsAnswered = {questionsAnswered} setUserAnswer = {setUserAnswer} />
				<RateQuestion onClick = {onClick} userRating = {userRating} />
		 	</>
			: (
				<>
					<Question currentQuestion = {currentQuestion} questionsAnswered = {questionsAnswered} setUserAnswer = {setUserAnswer} />
 				</>
			)}
		</div>
    );
}

export default Quiz;