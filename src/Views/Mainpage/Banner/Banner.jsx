import React from "react";
import Backgroundimg from "../../../img/backgroundimg.png";
import BannerButton from "./BannerButton";
import BannerContent from "./BannerContent";

const Banner = () => {
  return (
    <div
      className="Banner"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <img
        src={Backgroundimg}
        style={{
          width: "100%",
          height: "100vh",
          zIndex: "1",
          objectFit: "cover",
        }}
        alt="img"
      ></img>

      <div
        style={{
          background:
            "linear-gradient(to bottom, #D4D4D4 0%, #6E6E6E 30%, #1E1E1E 100%)",
          zIndex: "2",
          width: "100%",
          height: "100vh",
          opacity: "20%",
          position: "absolute",
          top: "0%",
        }}
      ></div>
      <BannerContent></BannerContent>
      <BannerButton></BannerButton>
    </div>
  );
};

export default Banner;
