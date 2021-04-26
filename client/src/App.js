import { useEffect, useState } from 'react';
import './App.css';
import Question from './components/Question.js';
import axios from 'axios';

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
	const [questionAnswered, setQuestionsAnswered] = useState(0);
	const [questionCount, setQuestionCount] = useState(1);

	// const getData = async () => {
	// 	const { data } = await axios.get('/quiz/question');
	// 	console.log(data);
	// 	setQuestion(data.question);
	// 	setOptions(data.options)
	// }

	useEffect(()=>{
		getQuestion()
	}, []);

	async function getQuestion(){
		let { data } = await axios.get('/quiz/question');
		setCurrentQuestion(data);
		console.log(data);
	}

	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (answerOption) => {
		if (answerOption === currentQuestion.answer) {
			setScore(score + 1);
		}

		setQuestionCount(questionCount + 1);

		getQuestion();
		// const nextQuestion = currentQuestion + 1;
		// if (nextQuestion < questions.length) {
		// 	setCurrentQuestion(nextQuestion);
		// } else {
		// 	setShowScore(true);
		// }
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					{/* You scored {score} out of {questions.length} */}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {questionCount}</span>
						</div>
						<div className='question-text'>{currentQuestion.question}</div>
					</div>
					<div className='answer-section'>
						{currentQuestion.options && currentQuestion.options.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption)}>{answerOption}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}