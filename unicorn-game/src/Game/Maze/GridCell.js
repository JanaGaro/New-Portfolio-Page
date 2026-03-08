import React from "react";
import classNames from "classnames";

const GridCell = ({ borders, index, spritePositions }) => {
  //conditionally renders borders around cell based on borders prop
  const gridCellClass = classNames({
    "Grid-cell": true,
    "border-east": borders.includes("east"),
    "border-west": borders.includes("west"),
    "border-north": borders.includes("north"),
    "border-south": borders.includes("south"),
  });

  return (
    <div className={gridCellClass}>
      {index === spritePositions.end ? "🌈" : null}
      {index === spritePositions.unicorn ? "🦄" : null}
      {index === spritePositions.monster ? "💀" : null}
    </div>
  );
};

export default GridCell;
