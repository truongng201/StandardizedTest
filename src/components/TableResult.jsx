import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ChangeQuestion, ChangeSection, PageType } from "../Actions";
import "./TableResult.css";

const TableResult = (props) => {
  let currentTest = useSelector((state) => state.CurrentTest);
  let dispatch = useDispatch();
  let { userAnswer, section, Answers } = props;
  let score = 0;
  let cells = [];
  let numberOfQuestion;
  if (section === "Reading") {
    numberOfQuestion = 40;
  } else if (section === "Science") {
    numberOfQuestion = 40;
  } else if (section === "English") {
    numberOfQuestion = 75;
  } else if (section === "Mathematics") {
    numberOfQuestion = 60;
  }

  const changeToQuestion = (i) => {
    return () => {
      dispatch(ChangeSection(section));
      dispatch(PageType("Section"));
      dispatch(ChangeQuestion(i));
    };
  };

  for (let i = 1; i <= numberOfQuestion; i++) {
    let YourAnswer;
    let indexOfAnswer = userAnswer.findIndex((Users) => Users.Q === `${i}`);

    if (indexOfAnswer !== -1) {
      if (userAnswer[indexOfAnswer].UserAns !== Answers[i - 1]) {
        YourAnswer = (
          <div
            style={{
              width: "20%",
              paddingLeft: "35px",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {userAnswer[indexOfAnswer].UserAns}
          </div>
        );
      } else {
        score = score + 1;
        YourAnswer = (
          <div style={{ width: "20%", paddingLeft: "35px" }}>
            {userAnswer[indexOfAnswer].UserAns}
          </div>
        );
      }
    } else {
      YourAnswer = (
        <div style={{ width: "20%", paddingLeft: "22px" }}>None</div>
      );
    }

    if (userAnswer)
      cells.push(
        <div
          className="Cell"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginLeft: "-10px",
            borderTop: "1px solid #dee2e6",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
          key={i}
        >
          <div style={{ width: "5%", fontWeight: "bold" }}>{i}</div>
          <Link
            // to={`/ACT/${currentTest}/${section}/Q/${i}`}
            onClick={changeToQuestion(i)}
            style={{ width: "35%" }}
          >
            Questions {i}
          </Link>

          {YourAnswer}
          <div style={{ width: "20%", paddingLeft: "50px" }}>
            {Answers[i - 1]}
          </div>
        </div>
      );
  }

  return (
    <div className="Table">
      <div
        className="HeaderCell"
        style={{
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "bold",
          paddingBottom: "10px",
          fontSize: "17px",
        }}
      >
        <div
          style={{
            marginLeft: "-10px",
            width: "5%",
          }}
        >
          #
        </div>
        <div style={{ width: "35%" }}>Qusetions</div>
        <div style={{ width: "20%" }}>Your Answer</div>
        <div style={{ width: "20%" }}>Correct Answer</div>
      </div>
      {cells}
      <div
        className="TotalScore"
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          paddingBottom: "10px",
          fontSize: "20px",
          borderTop: "1px solid #dee2e6",
        }}
      >
        TOTAL CORRECT ANSWER : {score}
      </div>
    </div>
  );
};

export default TableResult;
