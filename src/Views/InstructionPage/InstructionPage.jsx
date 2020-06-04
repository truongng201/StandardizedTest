import React from "react";
import ACTInstruction from "./ACTInstruction";
import SATInstruction from "./SATInstruction";
import ToeflInstruction from "./ToeflInstruction";

const InstructionPage = (props) => {
  let { test, section } = props;
  let InstructionView;
  switch (test) {
    case "ACT":
      InstructionView = <ACTInstruction section={section}></ACTInstruction>;
      break;
    case "SAT":
      InstructionView = <SATInstruction section={section}></SATInstruction>;
      break;
    case "Toefl":
      InstructionView = <ToeflInstruction section={section}></ToeflInstruction>;
      break;
    default:
      break;
  }
  return (
    <div
      className="InstructionPage"
      style={{
        fontSize: "15px",
        display: "flex",
        textAlign: "left",
        flexDirection: "column",
        padding: "5px 30px",
        letterSpacing: "0.2px",
      }}
    >
      {InstructionView}
    </div>
  );
};

export default InstructionPage;
