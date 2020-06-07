import { combineReducers } from "redux";
import currentAuth from "./currentAuth";
import ShowPagination from "./ShowPagination";
import FlaggedQuestions from "./FlaggedQuestions";
import AnswersStore from "./AnswersStore";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const AllReducers = combineReducers({
  currentAuth: currentAuth,
  ShowPagination: ShowPagination,
  FlaggedQuestions: FlaggedQuestions,
  AnswersStore: AnswersStore,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default AllReducers;
