import { combineReducers } from "redux";
import currentAuth from "./currentAuth";
import isLogged from "./isLogged";
import ShowPagination from "./ShowPagination";
import FlaggedQuestions from "./FlaggedQuestions";
import AnswersStore from "./AnswersStore";

const AllReducers = combineReducers({
  currentAuth: currentAuth,
  isLogged: isLogged,
  ShowPagination: ShowPagination,
  FlaggedQuestions: FlaggedQuestions,
  AnswersStore: AnswersStore,
});

export default AllReducers;
