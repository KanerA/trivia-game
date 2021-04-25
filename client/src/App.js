import './App.css';
import Option from './components/Option.js';

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
      <h1>{mockData.question}</h1>
      {mockData.answers.map(answer => <Option answer={answer} />)}
    </div>
  );
}

export default App;
