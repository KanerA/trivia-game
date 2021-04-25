import './App.css';
import Question from './components/Question.js';

function App() {
  let mockData = {
    "question": "Which country is the largest by total area?",
    "desc": true,
    "answers": [
    "Saint Vincent and the Grenadines",
    "Ukraine",
    "Tajikistan",
    "Kyrgyzstan"
    ]
    }
  return (
    <div className="App">
      <Question data={mockData} />
    </div>
  );
}

export default App;
