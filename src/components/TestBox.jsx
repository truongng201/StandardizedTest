import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AlertSiginin from "./AlertSiginin";
import ShowResults from "./ShowResults";

const TestBox = (props) => {
  const { PracticeTestIndex, Logo, Sections, currentTest } = props;
  let isLogged = useSelector((state) => state.firebase.auth.isEmpty);
  let profile = useSelector((state) => state.firebase.profile);
  let TestDoneFilter;
  let showSection = [];

  for (let i = 0; i < Sections.length; i++) {
    if (!profile.isEmpty) {
      TestDoneFilter = profile.TestDone.findIndex(
        (TestIsDone) =>
          TestIsDone.Test === currentTest &&
          TestIsDone.TestNumb === `${PracticeTestIndex}` &&
          TestIsDone.Section === Sections[i]
      );
    }
    showSection.push(
      <div style={{ display: "flex" }} key={i}>
        <Link
          to={`/${currentTest}/${PracticeTestIndex}/${Sections[i]}/0`}
          style={{
            cursor: "pointer",
            padding: "10px",
            fontSize: "16px",
            letterSpacing: "0.2px",
            color: "#CA005E",
            fontWeight: "bold",
          }}
        >
          {Sections[i]}
        </Link>
        {TestDoneFilter !== -1 && (
          <ShowResults
            section={Sections[i]}
            currentTest={currentTest}
            PracticeTestIndex={PracticeTestIndex}
          ></ShowResults>
        )}
      </div>
    );
  }

  if (!isLogged)
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
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {showSection}
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

  if (isLogged)
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
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {Sections.map((item, index) => (
            <div
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
              <AlertSiginin title={item}></AlertSiginin>
            </div>
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
            <AlertSiginin title={"Get started"}></AlertSiginin>
          </div>
        </div>
      </div>
    );
};

export default TestBox;
