import { stat } from "fs";
import React, { Component } from "react";

type counterState = {
  count: number;
};
type counterProps = {
  message: string;
};
export default class CounterClass extends Component<
  counterProps,
  counterState
> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((pervState) => ({
      count: pervState.count + 1,
    }));
  };
  render() {
    return (
      <>
        <h1> Counter : {this.state.count}</h1>
        <div>{this.props.message}</div>
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}
