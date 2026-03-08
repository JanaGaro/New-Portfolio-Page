import React from "react";
import WinUnicorn from "../../Assets/Imgs/WinGame.png";
import ReactFloaterJs from "react-floaterjs";

const WinUnicornImage = () => {
  return (
    <ReactFloaterJs>
      <img
        className="mx-auto sm:w-9/12 md:w-6/12 lg:w-4/12"
        src={WinUnicorn}
        alt="happy unicorn puking rainbow"
      ></img>
    </ReactFloaterJs>
  );
};

export default WinUnicornImage;
