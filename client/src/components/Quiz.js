import React from 'react';
import Question from './Question';
import RateQuestion from './RateQuestion';
import UserScore from './UserScore';

function Quiz({ questionsAnswered, correctAnswers, score,  currentQuestion, setUserAnswer, onClick, userRating, showScore, userAnswer }) {
    
    return (
        <div className='app'>
			{showScore ? (
				<UserScore score = {score} correctAnswers = {correctAnswers} questionsAnswered = {questionsAnswered} />
			) : userAnswer ? 
			<>
				<UserScore score = {score} correctAnswers = {correctAnswers} questionsAnswered = {questionsAnswered} />
				<Question currentQuestion = {currentQuestion} questionsAnswered = {questionsAnswered} setUserAnswer = {setUserAnswer} />
				<RateQuestion onClick = {onClick} userRating = {userRating} />
		 	</>
			: (
			<>
				<UserScore score = {score} correctAnswers = {correctAnswers} questionsAnswered = {questionsAnswered} />
				<Question currentQuestion = {currentQuestion} questionsAnswered = {questionsAnswered} setUserAnswer = {setUserAnswer} />
			</>
			)}
		</div>
    );
}

export default Quiz;