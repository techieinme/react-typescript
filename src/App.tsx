import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Toast } from "./component/Toast";
import { Button } from "./component/Button";
import { Input } from "./component/Input";
import { Text } from "./component/polymorphic/Text";
import { Tag } from "./component/polymorphic/Tag";

function App() {
  return (
    <div className="App">
      <Toast position="center" />
      {/* <Button
        data-test="12"
        variant="primary"
        onClick={() => {
          console.log("hello button click");
        }}
      >
        Hello Button
      </Button>
      <Input type="text" placeholder="Hello text" data-test="asd" />
      <Input type="password" placeholder="password type " />
      <Text as="h1" size="sm" color="primary">
        <p>primary</p>
      </Text>
      <Text as="p" size="md" color="secondary">
        secondary
      </Text>

      <Text as="label" htmlFor="somid" size="md" color="secondary">
        secondary
      </Text> */}

      <Tag as="h1" color="primary" size="md">
        h1
      </Tag>
      <Tag
        as="label"
        htmlFor="test"
        data-label="hello"
        color="primary"
        size="md"
      >
        label
      </Tag>
      <Tag as="span" color="primary" size="md">
        span
      </Tag>
    </div>
  );
}

export default App;
