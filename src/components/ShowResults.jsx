import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ResultsIcon from "../img/results.svg";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Loading from "./Loading";

const ShowResults = (props) => {
  const { className, section, currentTest, PracticeTestIndex } = props;
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  let profile = useSelector((state) => state.firebase.profile);
  let userAnswer;
  let [modalBody, setModalBody] = useState();
  let [Answers, setAnswers] = useState([1]);
  let TestDoneFilter;
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
      toggle();
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
      if (AnswersList.length > 0 && UserAnswersList.length > 0) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  };

  useEffect(() => {
    RenderModalBody(Answers, userAnswer)
      .then((res) => {
        setModalBody(<div>correct answer is not uploaded please wait</div>);
      })
      .catch((err) => {
        setModalBody(<Loading></Loading>);
      });
  }, [Answers, section, userAnswer]);

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
            {/* <ModalBody>
              <img alt="pic" src={`${RawScores}.png`}></img>
            </ModalBody> */}
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
