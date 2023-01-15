import React, { useEffect, useRef } from "react";
import "./App.css";
import { Input } from "./component/Hook/Input";
// import UseRefComponent from "./component/Hook/useRef";

function App() {
  const InputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (InputRef.current) {
      InputRef.current?.focus();
    }
  }, []);

  return (
    <div className="App">
      {/* <UseRefComponent /> */}
      <Input
        type="text"
        placeholder="Enter Value"
        name="firstname"
        ref={InputRef}
      />
    </div>
  );
}

export default App;
