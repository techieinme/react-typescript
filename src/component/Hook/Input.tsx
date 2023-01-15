import React, { forwardRef, Ref } from "react";

interface InputProps {
  type?: "text" | "password";
  placeholder?: string;
  name?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <>
      <input ref={ref} {...props} />
    </>
  );
});
