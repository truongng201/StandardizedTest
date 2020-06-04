import React from "react";
import ToolsIcon from "../img/tool.svg";
import { useDispatch, useSelector } from "react-redux";
import { ShowPagination, Flag, Unflag } from "../redux/Actions";
import { useParams } from "react-router-dom";

const Tools = () => {
  const dispatch = useDispatch();
  let PaginationState = useSelector((state) => state.ShowPagination);
  let FlaggedQuestions = useSelector((state) => state.FlaggedQuestions);
  let { QuestionNumb } = useParams();
  QuestionNumb = parseInt(QuestionNumb);
  let IndexFlaggedQuestion = FlaggedQuestions.findIndex(
    (FlaggedList) => FlaggedList.Ques === QuestionNumb
  );

  return (
    <div className="ToolsPart">
      <div className="Tools">
        <div className="DropUpContent">
          <li onClick={() => dispatch(ShowPagination(!PaginationState))}>
            {PaginationState ? "Hide Pagination" : "Show Pagination"}
          </li>
          <li
            onClick={() => {
              IndexFlaggedQuestion === -1
                ? dispatch(Flag(QuestionNumb))
                : dispatch(Unflag(QuestionNumb));
            }}
          >
            {IndexFlaggedQuestion === -1 ? "Flag" : "Unflag"}
          </li>
        </div>
        <div className="icon">
          <img src={ToolsIcon} alt="icon" height="36px" width="36px"></img>
        </div>
      </div>
    </div>
  );
};

export default Tools;
