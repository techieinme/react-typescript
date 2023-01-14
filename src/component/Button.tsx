import React from "react";

type ButtonProps = {
  variant: "primary" | "seconday";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

/**
 * child props now (parameter) children: string & React.ReactNode
 * to restrict the children as react node we need to omit react node
 * Omit<React.ComponentProps<"button">, "children">;
 * then type of children wil be only string
 */
export const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <div>
      <button {...rest} className={`class-with-${variant}`}>
        {children}
      </button>
    </div>
  );
};
