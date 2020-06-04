const currentTestNumb = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE TEST NUMB":
      return (state = action.currentTestNumb);
    default:
      return state;
  }
};

export default currentTestNumb;
