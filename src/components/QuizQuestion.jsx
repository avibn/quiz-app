import React from "react";
import QuizOption from "./QuizOption";

const QuizQuestion = ({ id, questionData, handleAnswerClick }) => {
  return (
    <div>
      <h3>{questionData.title}</h3>
      <h3>{id}</h3>
      {questionData.answers.map((answer) => (
        <QuizOption
          key={answer.id}
          answerID={answer.id}
          text={answer.title}
          handleAnswerClick={handleAnswerClick}
        />
      ))}
    </div>
  );
};

export default QuizQuestion;
