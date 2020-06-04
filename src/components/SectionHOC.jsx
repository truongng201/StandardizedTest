import React from "react";
import firebase from "../config/fbconfig";
import { useEffect, useState } from "react";

const SectionHOC = (WrappedComponent, currentTest, currentTestNumb) => {
  let [data, setData] = useState();
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

  return () => {
    return <WrappedComponent data={data} />;
  };
};

export default SectionHOC;
