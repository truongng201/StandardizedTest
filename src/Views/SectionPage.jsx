import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainNavbar from "../Navbar/MainNavBar";
import InstructionPage from "./InstructionPage/InstructionPage";
import SATSection from "./SATSection/SATSection";
import ACTSection from "./ACTSection/ACTSection";
import firebase from "../config/fbconfig";
import Loading from "../components/Loading";

const SectionPage = () => {
  let {
    currentTest,
    currentTestNumb,
    currentSection,
    QuestionNumb,
  } = useParams();
  let [data, setData] = useState({});

  useEffect(() => {
    const db = firebase.firestore();
    db.collection(currentTest)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          var test = `${currentTest}${currentTestNumb}`;
          if (doc.id === test) {
            setData(doc.data());
          }
        });
      });
  }, [currentTestNumb, currentTest]);

  if (data.Test !== "Done")
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
        {parseInt(QuestionNumb) > 0 && <Loading></Loading>}
      </div>
    );
  if (data.Test === "Done")
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
        {parseInt(QuestionNumb) > 0 && (
          <div>
            {currentTest === "SAT" && <SATSection data={data}></SATSection>}
            {currentTest === "ACT" && <ACTSection data={data}></ACTSection>}
          </div>
        )}
      </div>
    );
};

export default SectionPage;
