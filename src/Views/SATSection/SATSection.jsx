import React from "react";
import { useParams } from "react-router-dom";
import SATReading from "./SATReading";
import SATWriting from "./SATWriting";
import SATMathCal from "./SATMathCal";
import SATMathNoCal from "./SATMathNoCal";

const SATSection = (data) => {
  let { currentSection } = useParams();

  return (
    <div>
      {currentSection === "Reading" && (
        <SATReading data={data.data.Reading}></SATReading>
      )}
      {currentSection === "Writing" && (
        <SATWriting data={data.data.Writing}></SATWriting>
      )}
      {currentSection === "Math Test Calculator" && (
        <SATMathCal data={data.data.MathCal}></SATMathCal>
      )}
      {currentSection === "Math Test No Calculator" && (
        <SATMathNoCal data={data.data.MathNoCal}></SATMathNoCal>
      )}
    </div>
  );
};

export default SATSection;
