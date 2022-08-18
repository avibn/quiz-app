import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const QuizOption = ({ answerID, text, handleAnswerClick, isAnswer }) => {
  const { answerClicked, userAnswers } = useContext(GlobalContext);

  const onClick = () => {
    handleAnswerClick(answerID);
  };

  let optionClass = "";
  if (answerClicked) {
    const answerStatus = userAnswers.at(-1);

    optionClass = isAnswer
      ? "correct"
      : answerStatus.answerID === answerID && "incorrect";
  }

  return (
    <>
      <button
        className={`btn option-btn ${optionClass}`}
        onClick={onClick}
        disabled={answerClicked}
      >
        {text}
      </button>
      <br />
    </>
  );
};

export default QuizOption;
