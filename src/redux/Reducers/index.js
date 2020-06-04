import { combineReducers } from "redux";
import currentAuth from "./currentAuth";
import isLogged from "./isLogged";
import currentTest from "./currentTest";
import currentSection from "./currentSection";
import currentTestNumb from "./currentTestNumb";
import ShowPagination from "./ShowPagination";
import FlaggedQuestions from "./FlaggedQuestions";

const AllReducers = combineReducers({
  currentAuth: currentAuth,
  isLogged: isLogged,
  currenTest: currentTest,
  currentSection: currentSection,
  currentTestNumb: currentTestNumb,
  ShowPagination: ShowPagination,
  FlaggedQuestions: FlaggedQuestions,
});

export default AllReducers;
