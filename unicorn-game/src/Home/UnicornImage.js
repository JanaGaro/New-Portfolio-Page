import React from "react";
import Unicorn from "../Assets/Imgs/Unicorn.png";
import ReactFloaterJs from "react-floaterjs";

const UnicornImage = () => {
  return (
    <ReactFloaterJs>
      <img
        className="w-5/12 sm:w-3/12"
        src={Unicorn}
        alt="floating unicorn"
      ></img>
    </ReactFloaterJs>
  );
};

export default UnicornImage;
