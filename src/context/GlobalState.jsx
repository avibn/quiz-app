import React, { useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  answerClicked: false,
  userAnswers: [],
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function setAnswerClicked(isClicked) {
    dispatch({
      type: "ANSWER_CLICKED",
      payload: isClicked,
    });
  }

  function addUserAnswer(answerID, isAnswerCorrect) {
    dispatch({
      type: "ADD_USER_ANSWER",
      payload: {
        answerID,
        correct: isAnswerCorrect,
      },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        answerClicked: state.answerClicked,
        userAnswers: state.userAnswers,
        setAnswerClicked,
        addUserAnswer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
