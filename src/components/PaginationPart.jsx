import React, { useState } from "react";
import { useSelector } from "react-redux";
import FlagIcon from "../img/flag.svg";
import { useParams, Link } from "react-router-dom";

const PaginationPart = (props) => {
  let isShownPagination = useSelector((state) => state.ShowPagination);
  let FlaggedQuestions = useSelector((state) => state.FlaggedQuestions);

  let {
    QuestionNumb,
    currentTest,
    currentTestNumb,
    currentSection,
  } = useParams();

  let [startIndex, setStartIndex] = useState(1);
  let [endIndex, setEndIndex] = useState(props.numberOfPagesShown);

  let rows = [];
  for (let i = startIndex; i <= endIndex; i++) {
    let bar;
    let flag;

    if (i === parseInt(QuestionNumb)) {
      bar = <div className="bar"></div>;
    }
    if (FlaggedQuestions.length !== 0) {
      for (let j = 0; j < FlaggedQuestions.length; j++) {
        if (i === FlaggedQuestions[j].Ques) {
          flag = (
            <div className={isShownPagination ? "flag" : "flag Hide"}>
              <img alt="icon" src={FlagIcon} height="30px" width="30px"></img>
            </div>
          );
        }
      }
    }
    rows.push(
      <Link
        style={{ color: "inherit", textDecoration: "inherit" }}
        to={`/${currentTest}/${currentTestNumb}/${currentSection}/${i}`}
        key={i}
        className="listItemPagination"
      >
        <li>{i}</li>
        {bar}
        {flag}
      </Link>
    );
  }

  const previous = () => {
    return () => {
      if (startIndex > 1) {
        setStartIndex((startIndex = startIndex - props.numberOfPagesShown));
        setEndIndex((endIndex = endIndex - props.numberOfPagesShown));
      }
    };
  };
  const next = () => {
    return () => {
      if (endIndex < props.numberOfQuestion) {
        setStartIndex((startIndex = startIndex + props.numberOfPagesShown));
        setEndIndex((endIndex = endIndex + props.numberOfPagesShown));
      }
    };
  };

  return (
    <div className="Pagination">
      <div
        className={
          isShownPagination ? "PaginationPart" : "PaginationPart Hiden"
        }
        style={{ width: "70%" }}
      >
        <ul>
          <div className="listItemPagination" onClick={previous()}>
            &laquo;
          </div>
          {rows}
          <div className="listItemPagination" onClick={next()}>
            &raquo;
          </div>
        </ul>
      </div>
    </div>
  );
};

export default PaginationPart;
