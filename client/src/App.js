import { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios';
import Question from './components/Question';
import RateQuestion from './components/RateQuestion';

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState('');
	const [questionsAnswered, setQuestionsAnswered] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [strikes, setStrikes] = useState(0);
	const [userAnswer, setUserAnswer] = useState(null);
	const [userId, setUserId] = useState(null);
	const userRating = useRef(null);

	let ratingOption;

	useEffect(()=>{
		getQuestion()
	}, []);

	async function getQuestion(){
		let { data } = await axios.get('/quiz/question');
		setCurrentQuestion(data);
	};

	const createUser = async () => {

	};

	const handleAnswerRateQuestion = async (isRate) => {
		console.log(userRating.current);
		if (userAnswer === currentQuestion.answer) {
			setScore(score + 1);
		} else setStrikes(strikes + 1);

		setQuestionsAnswered(questionsAnswered + 1);
		setUserAnswer(null);
		if (strikes === 3) return setShowScore(true);

		if(!isRate || !userRating.current) return getQuestion();

		const userObject = {
			id: userId,
			name: 'Assaf',
			score,
		};
		const savedQuestion = {
			question: currentQuestion.question,
			option_1: currentQuestion.options[0],
			option_2: currentQuestion.options[1],
			option_3: currentQuestion.options[2],
			option_4: currentQuestion.options[3],
			answer: currentQuestion.answer,
			rating: userRating.current,
		}
		const userResponse = await axios.post('/quiz/user', userObject);
		await axios.post('/quiz/question/rate', savedQuestion);
		setUserId(userResponse.data.id);
		getQuestion();

	};

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