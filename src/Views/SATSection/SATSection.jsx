import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SATReading from "./SATReading";
import SATWriting from "./SATWriting";
import SATMathCal from "./SATMathCal";
import SATMathNoCal from "./SATMathNoCal";
import Loading from "../../components/Loading";

const SATSection = (data) => {
  let { currentSection } = useParams();
  let [shownPage, setShownPage] = useState();
  const RenderPage = (imageData) => {
    return new Promise((resolve, reject) => {
      if (imageData !== undefined) {
        resolve(imageData);
      } else {
        reject(false);
      }
    });
  };

  useEffect(() => {
    RenderPage(data.data)
      .then((res) => {
        setShownPage(
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
      })
      .catch((err) => {
        setShownPage(<Loading></Loading>);
      });
  }, [data, currentSection]);

  return <div>{shownPage}</div>;
};

export default SATSection;
