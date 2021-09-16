import React from "react";
import Question from "./Question";
import RateQuestion from "./RateQuestion";
import ScoreBoard from "./ScoreBoard";
import UserScore from "./UserScore";

function Quiz({
  questionsAnswered,
  correctAnswers,
  score,
  currentQuestion,
  setUserAnswer,
  onClick,
  userRating,
  userAnswer,
  scoreBoard,
  players,
}) {
  const isLogged = localStorage.getItem("isLogged");
  return (
    <div className="app">
      {!isLogged ? (
        <div className="loginAgain">You need to log in again!</div>
      ) : scoreBoard ? (
        <ScoreBoard players={players} />
      ) : userAnswer ? (
        <>
          <UserScore
            score={score}
            correctAnswers={correctAnswers}
            questionsAnswered={questionsAnswered}
          />
          <Question
            currentQuestion={currentQuestion}
            questionsAnswered={questionsAnswered}
            setUserAnswer={setUserAnswer}
          />
          <RateQuestion onClick={onClick} userRating={userRating} />
        </>
      ) : (
        <>
          <UserScore
            score={score}
            correctAnswers={correctAnswers}
            questionsAnswered={questionsAnswered}
          />
          <Question
            currentQuestion={currentQuestion}
            questionsAnswered={questionsAnswered}
            setUserAnswer={setUserAnswer}
          />
        </>
      )}
    </div>
  );
}

export default Quiz;
