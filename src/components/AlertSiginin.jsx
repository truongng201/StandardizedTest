import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AlertSiginin = (props) => {
  const { className, title } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div onClick={toggle}>{title}</div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Log in Alert</ModalHeader>
        <ModalBody>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "16px",
              letterSpacing: "0.2px",
              color: "#CA005E",
              fontWeight: "bold",
            }}
          >
            Please log in to access test
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            OK
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AlertSiginin;
