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
  return (
    <div className="app">
      <ScoreBoard players={players} />) : userAnswer ?
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
      : (
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
