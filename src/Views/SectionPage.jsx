import React from "react";
import { useParams } from "react-router-dom";
import MainNavbar from "../Navbar/MainNavBar";
import InstructionPage from "./InstructionPage/InstructionPage";
import SectionHOC from "../components/SectionHOC";
import SATSection from "./SATSection/SATSection";
import ACTSection from "./ACTSection/ACTSection";

const SectionPage = () => {
  let SectionShown;
  let {
    currentTest,
    currentTestNumb,
    currentSection,
    QuestionNumb,
  } = useParams();
  const SATWithHoc = SectionHOC(
    SATSection,
    currentTest,
    parseInt(currentTestNumb)
  );
  const ACTWithHoc = SectionHOC(
    ACTSection,
    currentTest,
    parseInt(currentTestNumb)
  );
  if (parseInt(QuestionNumb) > 0) {
    if (currentTest === "SAT") {
      SectionShown = <SATWithHoc></SATWithHoc>;
    } else if (currentTest === "ACT") {
      SectionShown = <ACTWithHoc></ACTWithHoc>;
    }
  }

  return (
    <div>
      <MainNavbar
        section={currentSection}
        test={currentTest}
        testNumb={currentTestNumb}
        QuestionNumb={parseInt(QuestionNumb)}
      ></MainNavbar>
      {parseInt(QuestionNumb) === 0 && (
        <InstructionPage
          test={currentTest}
          section={currentSection}
        ></InstructionPage>
      )}
      {SectionShown}
    </div>
  );
};

export default SectionPage;
