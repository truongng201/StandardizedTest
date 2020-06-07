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

export const Choice = (Question, Choice) => {
  return {
    type: "CHOICE",
    Question: Question,
    Choice: Choice,
  };
};

export const ChangeChoice = (Question, newChoice, indexOfAnswerChanged) => {
  return {
    type: "CHANGE CHOICE",
    Question: Question,
    newChoice: newChoice,
    indexOfAnswerChanged: indexOfAnswerChanged,
  };
};

export const deleteAnswerStore = () => {
  return {
    type: "DELETE ANSWER STORE",
  };
};

export const sendAnswerToFirebase = (UserId, TestDone) => {
  return (dispatch, getState, { getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();

    firestore
      .collection(`users`)
      .doc(`${UserId}`)
      .update({
        TestDone: TestDone,
      })
      .then(() => {
        dispatch({ type: "SEND ANSWER TO FIREBASE" });
      })
      .catch((err) => {
        dispatch({ type: "FAIL TO SEND " }, err);
      });
  };
};

export default {
  changeToSignUp,
  changeToSignIn,
  ShowPagination,
  unFlaggedAll,
  Flag,
  Unflag,
  ChangeChoice,
  Choice,
  deleteAnswerStore,
  sendAnswerToFirebase,
};
