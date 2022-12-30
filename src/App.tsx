import React from "react";
import "./App.css";
import { Greet } from "./component/Greet";
import { Person } from "./component/Person";
import { PersonList } from "./component/PersonList";
import { Status } from "./component/Status";
import { Heading } from "./component/Heading";
import { Oscar } from "./component/Oscar"; // with export alone
import Button from "./component/Button"; // with default export
function App() {
  let name = {
    firstName: "lakshmi",
    lastName: "kantha",
  };
  let personList = [
    {
      firstName: "lakshmi",
      lastName: "kanth",
    },
    {
      firstName: "shashi",
      lastName: "kanth",
    },
    {
      firstName: "vilas",
      lastName: "kanth",
    },
  ];
  return (
    <div className="App">
      <Greet name="Lakshmi" isLoggedIn={true} age={12} />
      {/* age default value ?  */}
      <Greet name="defaul props" isLoggedIn={true} />

      <Person name={name} />
      <PersonList list={personList} />
      <Status status="success" />

      <Heading>Hello world</Heading>
      <Oscar>
        <Heading>Hello heading as children in oscar</Heading>
      </Oscar>

      <Button
        id="1"
        handleClick={(event, id) => {
          console.log(event.currentTarget.getAttribute("id"));
          console.log("Button Clicked");
        }}
      />
    </div>
  );
}

export default App;
