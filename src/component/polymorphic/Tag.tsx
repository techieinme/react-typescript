import React from "react";

type TagOwnProps<E extends React.ElementType> = {
  size: "sm" | "md" | "lg";
  color: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type TagProps<E extends React.ElementType> = TagOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TagOwnProps<E>>;

export const Tag = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TagProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};
