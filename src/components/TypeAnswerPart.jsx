import React, { useState } from "react";
import { Choice, ChangeChoice } from "../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TypeAnswerPart = () => {
  const [inputValue, setInputValue] = useState();
  const { QuestionNumb } = useParams();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  let answersStore = useSelector((state) => state.AnswersStore);
  const dispatch = useDispatch();

  let indexOfAnswerChanged;
  indexOfAnswerChanged = answersStore.findIndex(
    (Answer) => Answer.Q === QuestionNumb
  );

  const onkeyup = () => {
    if (indexOfAnswerChanged === -1) {
      dispatch(Choice(QuestionNumb, parseInt(inputValue)));
    } else {
      dispatch(
        ChangeChoice(QuestionNumb, parseInt(inputValue), indexOfAnswerChanged)
      );
    }
  };

  return (
    <div className="input-field">
      <input onChange={handleChange} onKeyUp={onkeyup}></input>
    </div>
  );
};

export default TypeAnswerPart;
