import { useEffect, useState } from 'react';
import './App.css';
import Question from './components/Question.js';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('/quiz/question');
    setQuestion(data.question);
    setOptions(data.options)
  }

    useEffect(()=>{
      getData()
    }, []);
    
  return (
    <div className="App">
      <Question question = {question} options = {options} />
    </div>
  );
}

export default App;
