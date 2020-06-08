import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ResultsIcon from "../img/results.svg";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Loading from "./Loading";
import firebase from "../config/fbconfig";
import TableResult from "./TableResult";
import { redoTest } from "../redux/Actions";

const ShowResults = (props) => {
  const { className, section, currentTest, PracticeTestIndex } = props;
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  let profile = useSelector((state) => state.firebase.profile);
  let auth = useSelector((state) => state.firebase.auth);
  let [RawScores, setRawScores] = useState();
  let userAnswer;
  let [modalBody, setModalBody] = useState();
  let [Answers, setAnswers] = useState(undefined);
  let TestDoneFilter;
  const dispatch = useDispatch();

  const toggle = () => setModal(!modal);

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  const TestReDo = () => {
    return () => {
      let TestsDone = profile.TestDone;

      if (TestDoneFilter !== -1) {
        TestsDone.splice(TestDoneFilter, 1);
      }

      toggle();
      dispatch(redoTest(auth.uid, TestsDone));
    };
  };

  if (!profile.isEmpty) {
    TestDoneFilter = profile.TestDone.findIndex(
      (TestIsDone) =>
        TestIsDone.Test === currentTest &&
        TestIsDone.TestNumb === `${PracticeTestIndex}` &&
        TestIsDone.Section === section
    );
    if (TestDoneFilter !== -1) {
      userAnswer = profile.TestDone[TestDoneFilter].Answers;
    }
  }

  const RenderModalBody = (AnswersList, UserAnswersList) => {
    return new Promise((resolve, reject) => {
      if (AnswersList !== undefined && UserAnswersList.length > 0) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  };

  useEffect(() => {
    const db = firebase.firestore();
    let unmounted = false;

    db.collection(currentTest)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          var test = `${currentTest}${PracticeTestIndex}`;
          if (!unmounted) {
            if (doc.id === test) {
              setAnswers(doc.data().Answers);
              setRawScores(doc.data().Answers.RawScores);
            }
          }
        });
      });

    return () => {
      unmounted = true;
    };
  }, [PracticeTestIndex, currentTest]);

  useEffect(() => {
    RenderModalBody(Answers, userAnswer)
      .then((res) => {
        setModalBody(
          <TableResult
            section={section}
            Answers={Answers}
            userAnswer={userAnswer}
            currentTest={currentTest}
            currentTestNumb={PracticeTestIndex}
          ></TableResult>
        );
      })
      .catch((err) => {
        setModalBody(<Loading></Loading>);
      });
  }, [Answers, section, userAnswer, PracticeTestIndex, currentTest]);

  return (
    <div>
      <div style={{ cursor: "pointer" }}>
        <img
          src={ResultsIcon}
          height="30px"
          width="30px"
          alt="icon"
          onClick={toggle}
        ></img>
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={{ marginTop: "100px", maxWidth: "800px" }}
      >
        <ModalHeader toggle={toggle}>{section} Result</ModalHeader>
        <ModalBody>
          {modalBody}
          <br />
          <Button color="success" onClick={toggleNested}>
            Raw Scores
          </Button>
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
            style={{ maxWidth: "900px" }}
          >
            <ModalHeader>Raw Scores</ModalHeader>
            <ModalBody>
              <img alt="pic" src={`${RawScores}.png`}></img>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>
                Done
              </Button>
              <Button color="secondary" onClick={toggleAll}>
                All Done
              </Button>
            </ModalFooter>
          </Modal>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={TestReDo()}>
            Do the test again
          </Button>
          <Button color="primary" onClick={toggle}>
            Done
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ShowResults;
