import React from "react";
import TinyUnicorn from "../../Assets/Imgs/smallUnicorn.png";
import ReactFloaterJs from "react-floaterjs";

const SmallUnicorn = () => {
  return (
    <ReactFloaterJs>
      <img
        className="w-7/12"
        src={TinyUnicorn}
        alt="small floating unicorn"
      ></img>
    </ReactFloaterJs>
  );
};

export default SmallUnicorn;
