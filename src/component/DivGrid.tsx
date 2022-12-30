import React from "react";

interface ChildProps {
  gridRow: number;
  gridColumn: number;
}

interface Props {
  rows: number;
  columns: number;
  gap: string;
  maxWidth: string;
  children: React.ReactNode;
}

const DivGrid: React.FC<Props> = ({
  rows,
  columns,
  gap,
  maxWidth,
  children,
}) => {
  const test = columns;
  const fragmentStyles = {
    border: `1px thin red`,
    boxShadow: "0 0 3px 2px #cec7c759",
    display: "grid",
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridGap: gap,
    maxWidth: maxWidth,
  };

  return <div style={fragmentStyles}>{children}</div>;
};

export default DivGrid;
