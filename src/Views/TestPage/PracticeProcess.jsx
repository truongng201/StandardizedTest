import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firebase from "../../config/fbconfig";
import SmallLoading from "../../components/SmallLoading";

const PracticeProcess = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const profile = useSelector((state) => state.firebase.profile);
  const [records, setRecord] = useState();
  const [shownRecord, setShownRecord] = useState();
  useEffect(() => {
    if (!auth.isEmpty) {
      const db = firebase.firestore();
      db.collection("users")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.id === auth.uid) {
              setRecord(doc.data().TestDone);
            }
          });
        });
    }
  }, [auth]);

  const RenderRecord = (Records) => {
    return new Promise((resolve, reject) => {
      if (Records !== undefined) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  };

  useEffect(() => {
    RenderRecord(records)
      .then((res) => {
        let userName = profile.userName;

        if (records.length === 0) {
          setShownRecord(
            <div
              style={{
                textAlign: "center",
                fontSize: "18px",
                letterSpacing: "0.2px",
                color: "#CA005E",
                fontWeight: "bold",
                height: "50vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>Welcome {userName}</div>
              <div>Now you can start your practice test</div>
            </div>
          );
        } else {
          setShownRecord(
            <div
              style={{
                display: "flex",
                flexDirection: "column",

                height: "auto",
                marginTop: "20px",
              }}
            >
              {records.map((record, index) => (
                <div
                  key={index}
                  style={{
                    letterSpacing: "0.2px",
                    color: "#CA005E",
                    fontWeight: "bold",
                    fontSize: "16px",
                    padding: "5px 0px",
                  }}
                >
                  {record.TestTakenDate.day}/{record.TestTakenDate.month}/
                  {record.TestTakenDate.year} : {record.Test} {record.TestNumb}{" "}
                  {record.Section}
                </div>
              ))}
            </div>
          );
        }
      })
      .catch((err) => {
        setShownRecord(
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SmallLoading></SmallLoading>
          </div>
        );
      });
  }, [records, profile]);
  return (
    <div>
      {auth.isEmpty === true && (
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
          Please log in first
        </div>
      )}

      {auth.isEmpty === false && shownRecord}
    </div>
  );
};

export default PracticeProcess;
