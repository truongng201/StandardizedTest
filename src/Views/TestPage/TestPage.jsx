import React from "react";
import MainNavBar from "../../Navbar/MainNavBar";
import TestBox from "../../components/TestBox";

const TestPage = (props) => {
  const { test, Backgroundimg, numbsPracticeTest, Logo, Sections } = props;
  let LeftPart = [];
  var i;
  for (i = 1; i <= numbsPracticeTest; i++) {
    LeftPart.push(
      <TestBox
        PracticeTestIndex={i}
        Logo={Logo}
        key={i}
        Sections={Sections}
        currentTest={test}
      ></TestBox>
    );
  }
  return (
    <div style={{ width: "100%" }}>
      <MainNavBar section={""}></MainNavBar>
      <div
        className="banner"
        style={{
          position: "relative",
          width: "100%",
          height: "60vh",
        }}
      >
        <img
          src={Backgroundimg}
          style={{
            width: "100%",
            height: "60vh",
            zIndex: "1",
            objectFit: "cover",
          }}
          alt="img"
        ></img>
        <div
          style={{
            background:
              "linear-gradient(to bottom, #D4D4D4 0%, #6E6E6E 30%, #1E1E1E 100%)",
            zIndex: "2",
            width: "100%",
            height: "60vh",
            opacity: "20%",
            position: "absolute",
            top: "0%",
          }}
        ></div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <div
          className="Title"
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
            fontWeight: "bold",
            letterSpacing: "0.5px",
            color: "#CA005E",
            padding: "20px",
          }}
        >
          Let's get started with {test} practice test
        </div>
        <div
          style={{
            display: "grid",
            width: "100%",
            gridTemplateColumns: "1fr 2fr",
            gridTemplateRows: "1fr",
            padding: "0 60px",
          }}
        >
          <div
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "10px 30px",
              overflow: "auto",
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              border: "2px ridge rgb(202, 0, 94, 0.6)",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "18px",
                letterSpacing: "0.2px",
                color: "#CA005E",
                fontWeight: "bold",
              }}
            >
              Your Practice Process
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "18px",
                letterSpacing: "0.2px",
                color: "#CA005E",
                fontWeight: "bold",
                height: "50vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              You haven't done anything yet
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              padding: "0 30px",
            }}
          >
            {LeftPart}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
