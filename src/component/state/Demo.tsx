import React from "react";

interface demoProps {
  firstName?: string;
  lastName?: string;
  age?: number;
}
const Demo = ({ firstName, lastName, age }: demoProps) => {
  return (
    <>
      <h1>
        hello {firstName} ,{lastName} , {age}
      </h1>
    </>
  );
};

export default Demo;
