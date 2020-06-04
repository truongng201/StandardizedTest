import React from "react";

const BannerButton = () => {
  return (
    <div
      className="Banner-button"
      style={{
        color: "white",
        top: "60%",
        width: "100%",
        height: "auto",
        position: "absolute",
        textAlign: "center",
        zIndex: "3",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(to bottom, #CA005E 0%, #E4428D 70%, #E87EB0 100%)",
          width: "140px",
          padding: "10px",
          borderRadius: "30px",
          fontSize: "18px",
        }}
      >
        Get started
      </div>
    </div>
  );
};

export default BannerButton;
