import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DivGrid from "./component/DivGrid";

function App() {
  return (
    <>
      <DivGrid rows={3} columns={3} gap="1em" maxWidth="1200px">
        <div
          style={{
            background: "red",
            gridRow: "2 / span 2",
            gridColumn: "1 / span 1",
          }}
        >
          Child 1
        </div>
        <div style={{ background: "yellow", gridRow: "1", gridColumn: "3" }}>
          Child 2
        </div>
        <div style={{ background: "green", gridRow: "2", gridColumn: "3" }}>
          Child 3
        </div>
      </DivGrid>
    </>
  );
}

export default App;
