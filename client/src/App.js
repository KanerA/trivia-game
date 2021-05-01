import { useEffect, useRef, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Quiz from './components/Quiz';
import Login from './components/Login';
import SignUp from './components/SignUp';

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState('');
	const [questionsAnswered, setQuestionsAnswered] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [strikes, setStrikes] = useState(0);
	const [userAnswer, setUserAnswer] = useState(null);
	const [userId, setUserId] = useState(null);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const userRating = useRef(null);
	const userName = useRef('');
	const userPassword = useRef('');

	useEffect(()=>{
		getQuestion()
	}, []);

	async function getQuestion(){
		let { data } = await axios.get('/quiz/question', {
			headers: {
				'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
			}
		});
		setCurrentQuestion(data);
	};

	const handleAnswerRateQuestion = async (isRate) => {
		if (userAnswer === currentQuestion.answer) {
			setScore(score + 100);
			setCorrectAnswers(correctAnswers + 1);
		} else setStrikes(strikes + 1);
		
		setUserAnswer(null);
		if (strikes === 3) return setShowScore(true);
		setQuestionsAnswered(questionsAnswered + 1);
		
		const userObject = {
			id: userId,
			name: userName,
			score,
		};
		
		if(!isRate || !userRating.current) return getQuestion();
		
		const savedQuestion = {
			question: currentQuestion.question,
			option_1: currentQuestion.options[0],
			option_2: currentQuestion.options[1],
			option_3: currentQuestion.options[2],
			option_4: currentQuestion.options[3],
			answer: currentQuestion.answer,
			rating: userRating.current,
		}
		await axios.post('/quiz/question/rate', savedQuestion);
		const userResponse = await axios.patch('/quiz/user', userObject);
		setUserId(userResponse.data.id);
		getQuestion();

	};

	const onUserNameChange = (evt) => {
		userName.current = evt.target.value;
	};

	const onPasswordChange = (evt) => {
		userPassword.current = evt.target.value;
	};

	const userSignUp = async () => {
		try{
			const res = await axios.post('/quiz/user/signup', {
				name: userName.current,
				password: userPassword.current,
			});
			setUserId(res.data.id);
			localStorage.setItem('accessToken', res.data.accessToken);
			localStorage.setItem('refreshToken', res.data.refreshToken);
			document.location.pathname = '/trivia';
		} catch (err){
			console.log(err);
		}
	};

	return (
		<>
		<Router>
      <Switch>
        <Route path = '/' exact>
			<Login onUserNameChange = {onUserNameChange} onPasswordChange = {onPasswordChange} />
		</Route>
		<Route path = '/signup' exact>
			<SignUp 
				onClick = {userSignUp}
				onUserNameChange = {onUserNameChange}
				onPasswordChange = {onPasswordChange}
			/>
		</Route>
        <Route path = '/trivia' exact>
			<Quiz 
				questionsAnswered = {questionsAnswered}
				correctAnswers = {correctAnswers}
				score = {score}
				currentQuestion = {currentQuestion}
				setUserAnswer = {setUserAnswer}
				onClick = {handleAnswerRateQuestion}
				userRating = {userRating}
				showScore = {showScore}
				userAnswer = {userAnswer}
				player = {userName.current}
			/>
		</Route>
      </Switch>
    </Router>
		</>
	);
}