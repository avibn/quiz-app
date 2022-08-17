import React, { useState } from "react";

const QuizOption = ({ answerID, text, handleAnswerClick }) => {
  const [clicked, setClicked] = useState(false);
  const [correct, setCorrect] = useState(false); //todo: this should all be global state, so we can change the buttons back if quesiton is incorrect or correct

  const onClick = () => {
    setClicked(true);
    setCorrect(handleAnswerClick(answerID));
  };

  return (
    <button
      className={`option ${clicked && (correct ? "correct" : "incorrect")}`} //todo
      onClick={onClick}
    >
      {text}

      {clicked && <span>{correct ? " CORRECT" : " INCORRECT"}</span>}
    </button>
  );
};

export default QuizOption;
