import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const QuizOption = ({ answerID, text, handleAnswerClick, isAnswer }) => {
  const { answerClicked } = useContext(GlobalContext);

  const onClick = () => {
    handleAnswerClick(answerID);
  };

  return (
    <button
      className={`option ${
        answerClicked && (isAnswer ? "correct" : "incorrect")
      }`}
      onClick={onClick}
      disabled={answerClicked}
    >
      {text}

      {answerClicked && <span>{isAnswer ? " CORRECT" : " INCORRECT"}</span>}
    </button>
  );
};

export default QuizOption;
