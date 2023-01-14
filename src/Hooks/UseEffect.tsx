import React, { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    console.log("use effect logged");
  }, []);
  return (
    <>
      <h1>Hello world </h1>
    </>
  );
};

export default UseEffect;
