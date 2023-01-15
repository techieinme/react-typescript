import React, { useEffect, useRef } from "react";
import { Input } from "./Input";

export const UseRefComponent = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // default focus on the firstname input box
    firstNameRef?.current?.focus();
  }, []);

  const firstKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("firstKeyDown", e.currentTarget?.name, e.key);
      lastNameRef?.current?.focus();
    }
  };
  const lastKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("lastKeyDown", e.currentTarget?.name);
      submitRef?.current?.focus();
    }
  };
  const submitKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    console.log("submitKeyDown", e.currentTarget?.name);
  };
  return (
    <div>
      <Input
        type="text"
        placeholder="Enter The FirstName"
        name="firstName"
        ref={firstNameRef}
      />
      <Input
        type="text"
        placeholder="Enter The LastName"
        name="lastName"
        ref={lastNameRef}
      />
      <button ref={submitRef} onKeyDown={submitKeyDown}>
        Submit
      </button>
    </div>
  );
};

export default UseRefComponent;
