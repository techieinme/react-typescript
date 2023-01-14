import React from "react";

type TextProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};
/**
 * to remove the conflict the children of textprops and props we need to ommit the textprops
 *
 */
type props<E extends React.ElementType> = TextProps<E> &
  Omit<React.ComponentProps<E>, keyof TextProps<E>>;

export const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: props<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};
