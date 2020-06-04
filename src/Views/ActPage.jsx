import React from "react";
import Backgroundimg from "../img/ACTImg.jpg";
import TestPage from "./TestPage/TestPage";
import ACTLogo from "../img/ActLogo.png";

const ACTPage = () => {
  return (
    <div className="ACTPage">
      <TestPage
        test="ACT"
        Backgroundimg={Backgroundimg}
        numbsPracticeTest={2}
        Logo={ACTLogo}
        Sections={["English", "Mathematics", "Reading", "Science"]}
      ></TestPage>
    </div>
  );
};

export default ACTPage;
