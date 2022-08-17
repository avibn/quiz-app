const AppReducer = (state, action) => {
  switch (action.type) {
    case "ANSWER_CLICKED":
      return {
        ...state,
        answerClicked: action.payload,
      };
    case "ADD_USER_ANSWER":
      console.log(action.payload);
      return {
        ...state,
        userAnswers: [...state.userAnswers, action.payload],
      };
    default:
      return state;
  }
};

export default AppReducer;
