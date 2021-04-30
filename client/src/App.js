import { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios';
import Question from './components/Question';
import RateQuestion from './components/RateQuestion';

// function App() {
//   const [question, setQuestion] = useState('');
//   const [options, setOptions] = useState([]);

//   const getData = async () => {
//     const { data } = await axios.get('/quiz/question');
//     console.log(data);
//     setQuestion(data.question);
//     setOptions(data.options)
//   }

//     useEffect(()=>{
//       getData()
//     }, []);
    
//   return (
//     <div className="App">
//       <Question question = {question} options = {options} />
//     </div>
//   );
// }

// export default App;

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState('');
	const [questionsAnswered, setQuestionsAnswered] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [strikes, setStrikes] = useState(0);
	const [rateTheQuestion, setRateTheQuestion] = useState(false);
	const userRating = useRef(0);
	const [userId, setUserId] = useState(null);

	let ratingOption;

	useEffect(()=>{
		getQuestion()
	}, []);

	async function getQuestion(){
		let { data } = await axios.get('/quiz/question');
		setCurrentQuestion(data);
	};

	const handleAnswerOptionClick = (answerOption) => {
		if (strikes === 2) setShowScore(true);

		if (answerOption === currentQuestion.answer) {
			setScore(score + 1);
		} else setStrikes(strikes + 1);

		// if(!userId){
		// 	await axios.post('quiz/users',{
				
		// 	});
		// } else {			
		// 	await axios.patch('/quiz/user', {
				
		// 	});
		// }

		// if(!ratingNumber) { // post request to rate
			// await axios.post('', {
			// 	question,
			// 	rating,
			// 	options...,
			// 	answer,
			// })
		// }
		
		setQuestionsAnswered(questionsAnswered + 1);
		setRateTheQuestion(false);
		getQuestion();
	};

	const rateQuestion = async () => {

		handleAnswerOptionClick();
	};

	const onSkipClick = async () => {

		handleAnswerOptionClick();
	};

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questionsAnswered}
				</div>
			) : rateTheQuestion ? 
			<>	
				<Question currentQuestion = {currentQuestion} questionsAnswered = {questionsAnswered} setRateTheQuestion = {setRateTheQuestion} />
				<RateQuestion onRateClick = {rateQuestion} onSkipClick = {onSkipClick} userRating = {userRating} />
		 	</>
			: (
				<>
					<Question currentQuestion = {currentQuestion} questionsAnswered = {questionsAnswered} setRateTheQuestion = {setRateTheQuestion} />
 				</>
			)}
		</div>
	);
}