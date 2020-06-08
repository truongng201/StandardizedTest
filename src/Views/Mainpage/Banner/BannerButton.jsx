import React from "react";
import { Link } from "react-router-dom";

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
      <Link
        to="/login"
        style={{
          background:
            "linear-gradient(to bottom, #CA005E 0%, #E4428D 70%, #E87EB0 100%)",
          width: "140px",
          padding: "10px",
          borderRadius: "30px",
          fontSize: "18px",
          textDecoration: "inherit",
          color: "white",
        }}
      >
        Get started
      </Link>
    </div>
  );
};

export default BannerButton;
