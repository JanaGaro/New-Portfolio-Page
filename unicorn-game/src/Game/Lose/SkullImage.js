import React from "react";
import Skull from "../../Assets/Imgs/Skull.png";
import ReactFloaterJs from "react-floaterjs";

const SkullImage = () => {
  return (
    <ReactFloaterJs>
      <img
        className="mx-auto w-10/12 sm:w-9/12 md:w-5/12 lg:w-3/12"
        src={Skull}
        alt="happy floating skull monster"
      ></img>
    </ReactFloaterJs>
  );
};

export default SkullImage;
