import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  unFlaggedAll,
  deleteAnswerStore,
  //   sendAnswerToFirebase
} from "../redux/Actions";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

const EndButton = (props) => {
  const { className } = props;
  const dispatch = useDispatch();

  let { currentTest } = useParams();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  //   let indexOfResult = Results.findIndex(
  //     TestIsDone =>
  //       TestIsDone.test === currentTestNumb &&
  //       TestIsDone.section === currentSection
  //   );
  const EndSection = () => {
    return () => {
      toggle();
      dispatch(deleteAnswerStore());
      dispatch(unFlaggedAll());
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
