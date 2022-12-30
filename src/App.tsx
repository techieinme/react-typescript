import React from "react";
import "./App.css";
// import { Greet } from "./component/Greet";
// import { Person } from "./component/Person";
// import { PersonList } from "./component/PersonList";
// import { Status } from "./component/Status";
// import { Heading } from "./component/Heading";
// import { Oscar } from "./component/Oscar"; // with export alone
// import Button from "./component/Button"; // with default export
// import { Input } from "./component/Input";
import { Container } from "./component/Container";
import { Box } from "./component/context/Box";
import { ThemeContextProvider } from "./component/context/ThemeContextProvider";
import { User } from "./component/context/User";
import { UserContextProvider } from "./component/context/UserContext";
import { Domref } from "./component/hook/domref";
import { MutableRef } from "./component/hook/mutableRef";
import { Counter } from "./component/state/Counter";
import { Login } from "./component/state/Login";
function App() {
  // let name = {
  //   firstName: "lakshmi",
  //   lastName: "kantha",
  // };
  // let personList = [
  //   {
  //     firstName: "lakshmi",
  //     lastName: "kanth",
  //   },
  //   {
  //     firstName: "shashi",
  //     lastName: "kanth",
  //   },
  //   {
  //     firstName: "vilas",
  //     lastName: "kanth",
  //   },
  // ];

  // const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("on change event");
  // };
  return (
    <div className="App">
      {/* <Greet name="Lakshmi" isLoggedIn={true} age={12} /> */}
      {/* age default value ?  */}
      {/* <Greet name="defaul props" isLoggedIn={true} /> */}
      {/* 
      <Person name={name} />
      <PersonList list={personList} />
      <Status status="success" />

      <Heading>Hello world</Heading>
      <Oscar>
        <Heading>Hello heading as children in oscar</Heading>
      </Oscar> */}

      {/* <Button
        id="1"
        handleClick={(event, id) => {
          console.log(event.currentTarget.getAttribute("id"));
          console.log("Button Clicked");
        }}
      />
      <br /> */}

      {/* <Input
        value="hello"
        handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          console.log("on change event");
        }}
      />
      <br /> */}
      {/* <Input value="my value" handleChange={onChangeEvent} /> */}

      {/* <Container
        style={{
          background: "green",
          border: "1px solid black",
          padding: "10rem",
          margin: "2rem",
        }}
      /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <Login /> */}
      {/* <Counter /> */}

      {
        //login
        /* <UserContextProvider>
        <User />
      </UserContextProvider> */
      }

      <Domref />
      <MutableRef />
    </div>
  );
}

export default App;
