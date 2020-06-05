import React from "react";
import { useParams } from "react-router-dom";

const QuestionPart = (props) => {
  let { QuestionNumb } = useParams();

  return (
    <div className="QuestionPart" style={props.style}>
      <img
        src={`${props.QuestionImgSrc[QuestionNumb - 1]}.png`}
        alt="imgsrc"
        height="auto"
        width="auto"
        style={{ objectFit: "cover" }}
      ></img>
    </div>
  );
};
export default QuestionPart;
