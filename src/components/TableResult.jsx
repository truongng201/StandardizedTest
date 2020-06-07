import React from "react";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

const TableResult = (props) => {
  // let dispatch = useDispatch();
  let { userAnswer, section, Answers, currentTest, currentTestNumb } = props;
  let score = 0;
  let cells = [];
  let numberOfQuestion;
  let Answer;
  switch (currentTest) {
    case "SAT":
      switch (section) {
        case "Reading":
          Answer = Answers.Reading;
          numberOfQuestion = 52;
          break;
        case "Writing":
          Answer = Answers.Writing;
          numberOfQuestion = 44;
          break;
        case "Math Test No Calculator":
          Answer = Answers.MathCal;
          numberOfQuestion = 20;
          break;
        case "Math Test Calculator":
          Answer = Answers.MathNoCal;
          numberOfQuestion = 38;
          break;
        default:
          break;
      }
      break;
    case "ACT":
      switch (section) {
        case "Reading":
          Answer = Answers.Reading;
          numberOfQuestion = 40;
          break;
        case "English":
          Answer = Answers.English;
          numberOfQuestion = 75;
          break;
        case "Mathematics":
          Answer = Answers.Mathematics;
          numberOfQuestion = 60;
          break;
        case "Science":
          Answer = Answers.Science;
          numberOfQuestion = 40;
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

  for (let i = 1; i <= numberOfQuestion; i++) {
    let YourAnswer;
    let indexOfAnswer = userAnswer.findIndex((Users) => Users.Q === `${i}`);

    if (indexOfAnswer !== -1) {
      if (userAnswer[indexOfAnswer].UserAns !== Answer[i - 1]) {
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
            to={`/${currentTest}/${currentTestNumb}/${section}/${i}`}
            style={{ width: "35%" }}
          >
            Questions {i}
          </Link>

          {YourAnswer}
          <div style={{ width: "20%", paddingLeft: "50px" }}>
            {Answer[i - 1]}
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
