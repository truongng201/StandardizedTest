import React from "react";
import notAnserwered from "../img/circle.svg";
import isAnswered from "../img/isAnswered.svg";
import { useParams } from "react-router-dom";
import { Choice, ChangeChoice } from "../redux/Actions";
import { useDispatch, useSelector } from "react-redux";

const AnswerPortion = (props) => {
  let iconChosen;
  let { item } = props;
  let { QuestionNumb } = useParams();

  const dispatch = useDispatch();
  let answersStore = useSelector((state) => state.AnswersStore);
  let indexOfAnswerChanged;
  let indexOfAnswerChosen;
  indexOfAnswerChanged = answersStore.findIndex(
    (Answer) => Answer.Q === QuestionNumb
  );

  indexOfAnswerChosen = answersStore.findIndex(
    (Answer) => Answer.Q === QuestionNumb && Answer.UserAns === item
  );

  if (indexOfAnswerChosen === -1) {
    iconChosen = notAnserwered;
  } else {
    iconChosen = isAnswered;
  }

  const ChangeAnswer = (item) => {
    return () => {
      if (indexOfAnswerChanged === -1) {
        dispatch(Choice(QuestionNumb, item));
      } else {
        dispatch(ChangeChoice(QuestionNumb, item, indexOfAnswerChanged));
      }
    };
  };
  return (
    <div
      className="AnswerPortion"
      style={{ display: "flex", marginLeft: "30px" }}
    >
      <div>
        <img
          src={iconChosen}
          height="30px"
          width="30px"
          alt="icon"
          style={{ cursor: "pointer" }}
          onClick={ChangeAnswer(item)}
        ></img>
      </div>
      <div style={{ marginLeft: "10px", fontWeight: "bold" }}>{item}</div>
    </div>
  );
};

export default AnswerPortion;
