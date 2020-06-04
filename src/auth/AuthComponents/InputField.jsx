import React from "react";

const InputField = props => {
  let { type, placeholder, style } = props;
  return (
    <div className="input-field">
      <input type={type} placeholder={placeholder} style={style} />
    </div>
  );
};

export default InputField;
