import React from "react";
import { Horse } from "phosphor-react";

const RotatingHorse = () => {
  return (
    <Horse className="my-20 mx-auto" size={100} color="black" weight="duotone">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="4s"
        repeatCount="indefinite"
      ></animate>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="5s"
        from="0 0 0"
        to="360 0 0"
        repeatCount="indefinite"
      ></animateTransform>
    </Horse>
  );
};

export default RotatingHorse;
