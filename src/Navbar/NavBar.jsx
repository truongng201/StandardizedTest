import React from "react";
import LogoPage2 from "../img/Logo2.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { unFlaggedAll, deleteAnswerStore } from "../redux/Actions";
import { useDispatch } from "react-redux";
import EndButton from "../components/EndButton";

const NavBar = (props) => {
  const dispatch = useDispatch();
  let { section, test, testNumb, QuestionNumb } = props;

  let nextButton = (
    <Link
      to={`/${test}/${testNumb}/${section}/${QuestionNumb + 1}`}
      style={{ textDecoration: "inherit" }}
    >
      <Button ButtonText="Next"></Button>
    </Link>
  );
  if (test === "SAT") {
    if (section === "Reading") {
      if (QuestionNumb === 52) {
        nextButton = <div></div>;
      }
    } else if (section === "Writing") {
      if (QuestionNumb === 44) {
        nextButton = <div></div>;
      }
    } else if (section === "Math Test No Calculator") {
      if (QuestionNumb === 20) {
        nextButton = <div></div>;
      }
    } else if (section === "Math Test Calculator") {
      if (QuestionNumb === 38) {
        nextButton = <div></div>;
      }
    }
  } else if (test === "ACT") {
    if (section === "Reading") {
      if (QuestionNumb === 40) {
        nextButton = <div></div>;
      }
    } else if (section === "English") {
      if (QuestionNumb === 75) {
        nextButton = <div></div>;
      }
    } else if (section === "Mathematics") {
      if (QuestionNumb === 60) {
        nextButton = <div></div>;
      }
    } else if (section === "Science") {
      if (QuestionNumb === 40) {
        nextButton = <div></div>;
      }
    }
  }

  return (
    <div className="Nav-bar">
      <div
        className="Top-Nav-bar"
        style={{
          width: "100%",
          height: "auto",
          padding: "5px 40px",
          display: "flex",
          fontWeight: "500",
          fontSize: "20px",
          background:
            "linear-gradient(135deg, #CA005E 0%, #E4428D 80%, #E87EB0 100%)",
        }}
      >
        <div style={{ width: "20%" }}>
          <img alt="logopage" src={LogoPage2} height="30px" width="auto"></img>
        </div>
      </div>
      <div
        className="Bottom-Nav-Bar"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 5fr 1fr",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 20px 0px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            to={`/${test}`}
            style={{ textDecoration: "inherit" }}
            onClick={() => {
              dispatch(unFlaggedAll());
              dispatch(deleteAnswerStore());
            }}
          >
            <Button ButtonText="Home"></Button>
          </Link>
        </div>
        <div
          style={{
            letterSpacing: "0.2px",
            color: "#CA005E",
            fontWeight: "bold",
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {test} {testNumb} {section} Section
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {QuestionNumb > 0 && (
            <Link
              to={`/${test}/${testNumb}/${section}/${QuestionNumb - 1}`}
              style={{ textDecoration: "inherit" }}
            >
              <Button ButtonText="Prev"></Button>
            </Link>
          )}
          {nextButton}
          <EndButton></EndButton>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
