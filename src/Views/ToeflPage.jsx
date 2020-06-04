import React from "react";
import Backgroundimg from "../img/ToeflImg.jpg";
import TestPage from "./TestPage/TestPage";
import ToeflLogo from "../img/ToeflLogo.png";

const ToeflPage = () => {
  return (
    <div className="ToeflPage">
      <TestPage
        test="Toefl"
        Backgroundimg={Backgroundimg}
        numbsPracticeTest={3}
        Logo={ToeflLogo}
        Sections={[
          "Reading",
          "Listening",
          "Speaking",
          "Integrated Writing",
          "Independent Writing",
        ]}
      ></TestPage>
    </div>
  );
};

export default ToeflPage;
