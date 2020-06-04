import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ACTMath from "./ACTMath";
import ACTReading from "./ACTReading";
import ACTEnglish from "./ACTEnglish";
import ACTScience from "./ACTScience";
import Loading from "../../components/Loading";

const ACTSection = (data) => {
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
      })
      .catch((err) => {
        setShownPage(<Loading></Loading>);
      });
  }, [data, currentSection]);
  return <div>{shownPage}</div>;
};

export default ACTSection;
