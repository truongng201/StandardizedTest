import React from "react";
import ReviewIcon from "../img/results.svg";
import { Link } from "react-router-dom";

const TestBox = (props) => {
  const { PracticeTestIndex, Logo, Sections, currentTest } = props;
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px 10px",
        border: "2px ridge rgb(202, 0, 94, 0.6)",
        margin: "10px",
        borderRadius: "20px",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "15%",
            justifyContent: "center",
            display: "grid",
            alignItems: "center",
          }}
        >
          <img src={Logo} alt="icon" height="auto" width="70px"></img>
        </div>
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            letterSpacing: "0.2px",
            color: "#CA005E",
            fontWeight: "bold",
            fontSize: "22px",
            width: "80%",
          }}
        >
          Practice Test {PracticeTestIndex}
        </div>
        <img
          src={ReviewIcon}
          alt="icon"
          height="30px"
          width="30px"
          style={{ cursor: "pointer" }}
        ></img>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {Sections.map((item, index) => (
          <Link
            to={`/${currentTest}/${PracticeTestIndex}/${item}/0`}
            style={{
              cursor: "pointer",
              padding: "10px",
              fontSize: "16px",
              letterSpacing: "0.2px",
              color: "#CA005E",
              fontWeight: "bold",
            }}
            key={index}
          >
            {item}
          </Link>
        ))}
      </div>
      <div
        style={{
          marginTop: "10px",
          color: "white",
          top: "60%",
          width: "100%",
          height: "auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(to bottom, #CA005E 0%, #E4428D 70%, #E87EB0 100%)",
            width: "140px",
            padding: "8px",
            borderRadius: "20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          <Link
            to={`/${currentTest}/${PracticeTestIndex}/${Sections[0]}/0`}
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestBox;
