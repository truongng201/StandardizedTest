import React from "react";
import Backgroundimg from "../img/IeltsImg.png";
import TestPage from "./TestPage/TestPage";
import IeltsLogo from "../img/IeltsLogo.png";

const IeltsPage = () => {
  return (
    <div className="IeltsPage">
      <TestPage
        test="Ielts"
        Backgroundimg={Backgroundimg}
        numbsPracticeTest={5}
        Logo={IeltsLogo}
        Sections={["Reading", "Listening", "Speaking", "Writing"]}
      ></TestPage>
    </div>
  );
};

export default IeltsPage;
