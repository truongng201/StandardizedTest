import React from "react";
import { useParams } from "react-router-dom";
import ACTMath from "./ACTMath";
import ACTReading from "./ACTReading";
import ACTEnglish from "./ACTEnglish";
import ACTScience from "./ACTScience";

const ACTSection = (data) => {
  let { currentSection } = useParams();

  return (
    <div>
      {currentSection === "Mathematics" && (
        <ACTMath data={data.data.Mathematics}></ACTMath>
      )}
      {currentSection === "Reading" && (
        <ACTReading data={data.data.Reading}></ACTReading>
      )}
      {currentSection === "English" && (
        <ACTEnglish data={data.data.English}></ACTEnglish>
      )}
      {currentSection === "Science" && (
        <ACTScience data={data.data.Science}></ACTScience>
      )}
    </div>
  );
};

export default ACTSection;
