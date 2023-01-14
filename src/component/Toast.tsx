import React from "react";

/**
 *  Position props can be of
 *  left-top | left-bottom | left-center
 *  right-top | right-bottom | right-center
 */

type HorizontalPosition = "left" | "center" | "right";
type VertialPosition = "top" | "center" | "bottom";
type PositionProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VertialPosition}`, "center-center">
    | "center";
};

/**
 * center-center : to avoid this we need to use exclude 
  position: `${HorizontalPosition}-${VertialPosition}`;
 * 
 */
export const Toast = ({ position }: PositionProps) => {
  return <div>{position}</div>;
};
