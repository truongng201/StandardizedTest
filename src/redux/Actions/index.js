export const changeToSignIn = () => {
  return {
    type: "CHANGE TO SIGN IN",
  };
};

export const changeToSignUp = () => {
  return {
    type: "CHANGE TO SIGN UP",
  };
};

export const logIn = () => {
  return {
    type: "LOG IN",
  };
};

export const logOut = () => {
  return {
    type: "LOG OUT",
  };
};

export const changeCurrentTest = (currentTest) => {
  return {
    type: "CURRENT TEST",
    currentTest: currentTest,
  };
};

export const ShowPagination = (isShown) => {
  return {
    type: "SHOW PAGINATION",
    isShown: isShown,
  };
};

export const Flag = (questionNumb) => {
  return {
    type: "IS FLAGGED",
    questionNumb: questionNumb,
  };
};

export const Unflag = (questionNumb) => {
  return {
    type: "UNFLAGGED",
    questionNumb: questionNumb,
  };
};

export const unFlaggedAll = () => {
  return {
    type: "UNFLAGGED ALL",
  };
};

export default {
  changeToSignUp,
  changeToSignIn,
  logIn,
  logOut,
  changeCurrentTest,
  ShowPagination,
  unFlaggedAll,
  Flag,
  Unflag,
};
