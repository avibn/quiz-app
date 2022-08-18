import React, { useContext } from "react";
import QuizQuestion from "./QuizQuestion";
import quizzes from "../quiz.json";
import { useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Quiz = () => {
  // index from 1
  const [questionIndex, setQuestionIndex] = useState(1);
  const [quizEnded, setQuizEnded] = useState(false);

  const { answerClicked, setAnswerClicked, userAnswers } =
    useContext(GlobalContext);

  const currentQuestion = quizzes.questions[questionIndex];

  const handleNextQuestionClick = () => {
    setAnswerClicked(false);
    if (!quizzes.questions[questionIndex + 1]) {
      setQuizEnded(true);
    }
    setQuestionIndex(questionIndex + 1);
  };

  if (quizEnded) {
    // calculate user score
    const noCorrect = userAnswers.filter((answer) => answer.correct).length;
    const total = userAnswers.length;

    return (
      <div>
        <h3>Quiz has finished!</h3>
        <p>
          {noCorrect}/{total} correct answers.
        </p>
      </div>
    );
  }

  return (
    <>
      <QuizQuestion id={questionIndex} questionData={currentQuestion} />
      {answerClicked && (
        <button className="btn" onClick={handleNextQuestionClick}>
          Next Question
        </button>
      )}
    </>
  );
};

export default Quiz;
