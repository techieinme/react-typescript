import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [first, setFirst] = useState<number | null>(0);
  const [second, setSecond] = useState<number | null>(0);

  useEffect(() => {
    console.log(" useEffect logged 1 ");
  }, [first]);

  useEffect(() => {
    console.log(" useEffect logged 2 ");
  }, [second]);

  useEffect(() => {
    console.log(" useEffect logged 3 ");
  }, [first, second]);

  const setName1 = () => {
    const rand = Math.random();
    setFirst(rand);
  };

  const setName2 = () => {
    const rand = Math.random();
    setSecond(rand);
  };

  return (
    <div className="App">
      {/* <UseEffect /> */}
      <button onClick={setName1}>setName1</button>
      <button onClick={setName2}>setName2</button>
    </div>
  );
}

export default App;
