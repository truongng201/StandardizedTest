const FlaggedQuestions = (state = [], action) => {
  switch (action.type) {
    case "IS FLAGGED":
      state = state.concat({
        Ques: action.questionNumb,
      });
      const sortNumb = (a, b) => {
        let numA = a.numb;
        let numB = b.numb;
        return numA - numB;
      };

      state.sort(sortNumb);

      return state;
    case "UNFLAGGED":
      let filterState = state.filter(
        (QuestionsFlagged) => QuestionsFlagged.Ques !== action.questionNumb
      );

      return (state = filterState);
    case "UNFLAGGED ALL":
      return (state = []);
    default:
      return state;
  }
};

export default FlaggedQuestions;
