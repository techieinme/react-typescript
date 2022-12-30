import { stat } from "fs";
import { useReducer } from "react";

type stateProps = {
  count: number;
};

// type actionProps = {
//   type: "increment" | "decrement" | "reset";
//   payload?: number;
// };

type updateAction = {
  type: "increment" | "decrement";
  payload: number;
};
type resetAction = {
  type: "reset";
};

type actionProps = updateAction | resetAction;

const reducer = (state: stateProps, action: actionProps) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
      break;

    case "decrement":
      return { count: state.count - 1 };
      break;

    case "reset":
      return initialState;
      break;

    default:
      return state;
      break;
  }
};

const initialState = { count: 0 };
export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <pre>{state.count}</pre>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
};
