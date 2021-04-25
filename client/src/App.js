import { useEffect, useState } from 'react';
import './App.css';
import Question from './components/Question.js';
import axios from 'axios';

function App() {
  const [questionData, setQuestionData] = useState([])

  const getData = async () => {
    const { data } = await axios.get('/quiz/question');
    console.log(data);
    setQuestionData([data]);
  }

  // let mockData = {
  //   "question": "Which country is the largest by total area?",
  //   "desc": true,
  //   "answers": [
  //   "Saint Vincent and the Grenadines",
  //   "Ukraine",
  //   "Tajikistan",
  //   "Kyrgyzstan"
  //   ]
  //   }

    useEffect(()=>{
      getData()
    }, []);
    
  return (
    <div className="App">
      <Question data={questionData} />
    </div>
  );
}

export default App;
