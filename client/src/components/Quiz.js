import React from 'react';
import Question from './Question';
import RateQuestion from './RateQuestion';

function Quiz() {
    return (
        <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questionsAnswered}
				</div>
			) : userAnswer ? 
			<>	
				<Question currentQuestion = {currentQuestion} questionsAnswered = {questionsAnswered} setUserAnswer = {setUserAnswer} />
				<RateQuestion onClick = {handleAnswerRateQuestion} userRating = {userRating} />
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