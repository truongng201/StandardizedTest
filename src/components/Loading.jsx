import React from "react";
import { Spinner } from "reactstrap";

const Loading = () => {
  return (
    <div
      className="Loading"
      style={{ paddingTop: "50px", textAlign: "center" }}
    >
      <Spinner
        type="grow"
        color="primary"
        style={{ width: "50px", height: "50px" }}
      />
      <Spinner
        type="grow"
        color="secondary"
        style={{ width: "50px", height: "50px" }}
      />
      <Spinner
        type="grow"
        color="success"
        style={{ width: "50px", height: "50px" }}
      />
      <Spinner
        type="grow"
        color="danger"
        style={{ width: "50px", height: "50px" }}
      />
      <Spinner
        type="grow"
        color="warning"
        style={{ width: "50px", height: "50px" }}
      />
      <Spinner
        type="grow"
        color="info"
        style={{ width: "50px", height: "50px" }}
      />
      <Spinner
        type="grow"
        color="dark"
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  );
};

export default Loading;
