import React from "react";

interface FlexBoxProps {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  flexFlow?: string;
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const FlexBox = (props: FlexBoxProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: props.direction,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        flexFlow: props.flexFlow,
        flexWrap: props.flexWrap,
        alignSelf: props.alignSelf,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

export default FlexBox;
