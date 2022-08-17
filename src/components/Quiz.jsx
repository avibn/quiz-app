import React from "react";
import QuizQuestion from "./QuizQuestion";
import quizzes from "../quiz.json";
import { useState } from "react";

const Quiz = () => {
  // index from 1
  const [questionIndex, setQuestionIndex] = useState(1);
  const [answerClicked, setAnswerClicked] = useState(false);

  const currentQuestion = quizzes.questions[questionIndex];
  console.log(currentQuestion);

  const handleAnswerClick = (answerID) => {
    setAnswerClicked(true);

    if (currentQuestion.correctAnswer === answerID) {
      return true;
    }
    return false;
  };

  const handleNextQuestionClick = () => {
    setQuestionIndex(questionIndex + 1);
    setAnswerClicked(false);
  };

  return (
    <>
      <QuizQuestion
        id={questionIndex}
        questionData={currentQuestion}
        handleAnswerClick={handleAnswerClick}
      />
      {answerClicked && (
        <button onClick={handleNextQuestionClick}>Next Question</button>
      )}
    </>
  );
};

export default Quiz;
