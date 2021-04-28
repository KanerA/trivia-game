import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Question from './components/Question';

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

		setQuestionsAnswered(questionsAnswered + 1);

		getQuestion();
		
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questionsAnswered}
				</div>
			) : (
				<>
					<Question currentQuestion = {currentQuestion} questionsAnswered = {questionsAnswered} handleAnswerOptionClick = {handleAnswerOptionClick} />
 				</>
			)}
		</div>
	);
}