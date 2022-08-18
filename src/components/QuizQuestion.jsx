import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import QuizOption from "./QuizOption";

const QuizQuestion = ({ id, questionData }) => {
  const { setAnswerClicked, addUserAnswer } = useContext(GlobalContext);

  const handleAnswerClick = (answerID) => {
    setAnswerClicked(true);

    const isAnswerCorrect = questionData.correctAnswer === answerID;
    addUserAnswer(answerID, isAnswerCorrect);
  };

  return (
    <div>
      <h3>
        {id}. {questionData.title}
      </h3>
      <div className="options">
        {questionData.answers.map((answer) => (
          <QuizOption
            key={answer.id}
            answerID={answer.id}
            text={answer.title}
            handleAnswerClick={handleAnswerClick}
            isAnswer={questionData.correctAnswer === answer.id}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
