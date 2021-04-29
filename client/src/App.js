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
	const [rate, setRate] = useState(false);
	// const [ratingNumber, setRatingNumber] = useState(null);
	// const [userId, setUserId] = useState(null);

	let ratingOption;

	useEffect(()=>{
		getQuestion()
	}, []);

	async function getQuestion(){
		let { data } = await axios.get('/quiz/question');
		setCurrentQuestion(data);
	}

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
		setRate(false);
		getQuestion();
	};

	const rateQuestion = async () => {

		handleAnswerOptionClick();
	};

	const onRateOptionClick = (option) => {
		ratingOption = option; // possible to give this variable to the component and change it there
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
			) : rate ? 
			<>	
				<Question currentQuestion = {currentQuestion} questionsAnswered = {questionsAnswered} setRate = {setRate} />
				<RateQuestion onRateClick = {rateQuestion} onSkipClick = {onSkipClick} onRateOptionClick = {onRateOptionClick} />
		 	</>
			: (
				<>
					<Question currentQuestion = {currentQuestion} questionsAnswered = {questionsAnswered} setRate = {setRate} />
 				</>
			)}
		</div>
	);
}