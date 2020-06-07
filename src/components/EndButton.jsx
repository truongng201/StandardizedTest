import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  unFlaggedAll,
  deleteAnswerStore,
  sendAnswerToFirebase,
} from "../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const EndButton = (props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const AnswersStore = useSelector((state) => state.AnswersStore);
  let { currentTest, currentSection, currentTestNumb } = useParams();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const auth = useSelector((state) => state.firebase.auth);
  let profile = useSelector((state) => state.firebase.profile);

  //get test taken date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  const EndSection = () => {
    return () => {
      toggle();
      dispatch(deleteAnswerStore());
      dispatch(unFlaggedAll());
      if (AnswersStore.length > 0) {
        let TestDone = profile.TestDone.concat({
          Test: `${currentTest}`,
          TestNumb: `${currentTestNumb}`,
          Section: `${currentSection}`,
          Answers: AnswersStore,
          TestTakenDate: {
            day: dd,
            month: mm,
            year: yyyy,
          },
        });

        dispatch(sendAnswerToFirebase(auth.uid, TestDone));
      }
    };
  };

  return (
    <div style={{ marginRight: "10px" }}>
      <Button
        style={{
          background:
            "linear-gradient(to bottom, #CA005E 0%, #E4428D 70%, #E87EB0 100%)",
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "14px",
          cursor: "pointer",
          border: "none",
        }}
        size="sm"
        onClick={toggle}
      >
        End
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={{ marginTop: "100px" }}
      >
        <ModalHeader toggle={toggle}>End Section</ModalHeader>
        <ModalBody
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Are You Sure{" "}
        </ModalBody>
        <ModalFooter>
          <Link
            to={`/${currentTest}`}
            style={{ textDecoration: "inherit" }}
            onClick={EndSection()}
          >
            <Button color="primary">Of Course</Button>
          </Link>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EndButton;
