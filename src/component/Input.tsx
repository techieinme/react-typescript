import { FC } from "react";
import InputProps from "./Inputs.types";

export const Input: FC<InputProps> = ({ value, handleChange }) => {
  return <input value={value} onChange={handleChange} />;
};
