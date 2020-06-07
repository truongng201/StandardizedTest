import React from "react";
import { Spinner } from "reactstrap";

const SmallLoading = () => {
  return (
    <div
      className="Loading"
      style={{ paddingTop: "50px", textAlign: "center" }}
    >
      <Spinner
        type="grow"
        color="primary"
        style={{ width: "30px", height: "30px" }}
      />
      <Spinner
        type="grow"
        color="secondary"
        style={{ width: "30px", height: "30px" }}
      />
      <Spinner
        type="grow"
        color="success"
        style={{ width: "30px", height: "30px" }}
      />
      <Spinner
        type="grow"
        color="danger"
        style={{ width: "30px", height: "30px" }}
      />
    </div>
  );
};

export default SmallLoading;
