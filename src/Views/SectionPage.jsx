import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainNavbar from "../Navbar/MainNavBar";
import InstructionPage from "./InstructionPage/InstructionPage";
// import SectionHOC from "../components/SectionHOC";
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
  let [SectionShown, setSectionShown] = useState();
  const RenderPage = (imageData) => {
    return new Promise((resolve, reject) => {
      if (imageData.Test === "Done") {
        resolve(imageData);
      } else {
        reject(imageData);
      }
    });
  };

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

  useEffect(() => {
    RenderPage(data)
      .then((res) => {
        if (currentTest === "SAT") {
          setSectionShown(<SATSection data={data}></SATSection>);
        } else if (currentTest === "ACT") {
          setSectionShown(<ACTSection data={data}></ACTSection>);
        }
      })
      .catch((err) => {
        setSectionShown(<Loading></Loading>);
      });
  }, [data, currentTest, QuestionNumb]);

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
      {parseInt(QuestionNumb) > 0 && SectionShown}
    </div>
  );
};

export default SectionPage;
