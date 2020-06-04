import React from "react";

const PassagePart = (props) => {
  let PassageImgSrc = props.PassageImgSrc;

  return (
    <div className="PassagePart">
      <div className="PassageHead" style={{ fontStyle: "bold" }}>
        <strong>PASSAGE {props.PassageIndex}</strong>
      </div>
      <div
        className="PassageScrolling"
        style={{ overflowY: "scroll", overflowX: "hidden", height: "450px" }}
      >
        {PassageImgSrc.map((paragraphImgSrc) =>
          paragraphImgSrc.Pra.map((pra, index) => (
            <img
              key={index}
              src={`${pra}.png`}
              alt="icon"
              height="auto"
              width="auto"
              style={{ objectFit: "cover" }}
            ></img>
          ))
        )}
      </div>
    </div>
  );
};

export default PassagePart;
