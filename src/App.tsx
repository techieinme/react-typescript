import React from "react";
import { RandomNumber } from "./component/RandomNumber/RandomNumber";

function App() {
  return (
    <div className="App">
      <RandomNumber value={12} isPositive />
    </div>
  );
}

export default App;
