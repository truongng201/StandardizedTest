import React from "react";
import arrowIcon from "../img/arrow.svg";
import { useHistory } from "react-router-dom";
const ReturnButton = () => {
  const history = useHistory();
  console.log(history);
  const goBackHandle = () => {
    history.goBack();
  };
  return (
    <div
      className="return-button"
      style={{ position: "fixed", top: 15, right: 15 }}
      onClick={goBackHandle}
    >
      <img src={arrowIcon} alt="icon" height="20px" width="20px"></img>
    </div>
  );
};

export default ReturnButton;
