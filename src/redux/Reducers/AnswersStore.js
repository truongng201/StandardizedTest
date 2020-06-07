const AnswersStore = (state = [], action) => {
  switch (action.type) {
    case "CHOICE":
      state = state.concat({ Q: action.Question, UserAns: action.Choice });
      const sortQuestion = (a, b) => {
        let numA = a.Q;
        let numB = b.Q;
        return numA - numB;
      };
      state.sort(sortQuestion);

      return state;
    case "CHANGE CHOICE":
      state = [
        ...state.slice(0, action.indexOfAnswerChanged),
        { Q: action.Question, UserAns: action.newChoice },
        ...state.slice(action.indexOfAnswerChanged + 1),
      ];
      return state;
    case "DELETE ANSWER STORE":
      return (state = []);
    case "SEND ANSWER TO FIREBASE":
      return (state = []);
    case "FAIL TO SEND ":
      console.log(action.err);
      return state;
    default:
      return state;
  }
};

export default AnswersStore;
