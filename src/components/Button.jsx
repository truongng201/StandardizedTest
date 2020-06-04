import React from "react";

const Button = (props) => {
  const { ButtonText } = props;
  return (
    <div
      className="Banner-button"
      style={{
        color: "white",
        textAlign: "center",
        margin: "5px",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(to bottom, #CA005E 0%, #E4428D 70%, #E87EB0 100%)",
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        {ButtonText}
      </div>
    </div>
  );
};

export default Button;
