import React from "react";
import Backgroundimg from "../img/SatImg.jpg";
import TestPage from "./TestPage/TestPage";
import SATLogo from "../img/SatLogo.png";

const SATPage = () => {
  return (
    <div className="SATPage">
      <TestPage
        test="SAT"
        Backgroundimg={Backgroundimg}
        numbsPracticeTest={3}
        Logo={SATLogo}
        Sections={[
          "Reading",
          "Writing",
          "Math Test No Calculator",
          "Math Test Calculator",
        ]}
      ></TestPage>
    </div>
  );
};

export default SATPage;
