const currentTest = (state = "", action) => {
  switch (action.type) {
    case "CURRENT TEST":
      return (state = action.currentTest);
    default:
      return state;
  }
};

export default currentTest;
