import React from "react";

const ReuseButton = (props) => {
  const { label, style, onClick } = props;
  return (
    <button className="button" style={style} onClick={onClick}>
      {label}
    </button>
  );
};
export default ReuseButton;
