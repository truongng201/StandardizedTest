import React from "react";
import AnswerPortion from "./AnswerPortion";
import { useParams } from "react-router-dom";

const AnswersPart = () => {
  let { QuestionNumb, currentTest, currentSection } = useParams();

  let answers;
  if (currentTest === "SAT") {
    answers = ["A", "B", "C", "D"];
  } else if (currentTest === "ACT") {
    if (QuestionNumb % 2 !== 0 && currentSection !== "Mathematics") {
      answers = ["A", "B", "C", "D"];
    } else if (QuestionNumb % 2 === 0 && currentSection !== "Mathematics") {
      answers = ["F", "G", "H", "J"];
    } else if (QuestionNumb % 2 !== 0 && currentSection === "Mathematics") {
      answers = ["A", "B", "C", "D", "E"];
    } else if (QuestionNumb % 2 === 0 && currentSection === "Mathematics") {
      answers = ["F", "G", "H", "J", "K"];
    }
  }

  return (
    <div
      className="AnswersPart"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {answers.map((item, index) => (
        <AnswerPortion
          item={item}
          key={index}
          index={index}
          Question={QuestionNumb}
        ></AnswerPortion>
      ))}
    </div>
  );
};

export default AnswersPart;
