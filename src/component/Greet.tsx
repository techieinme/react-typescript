import { FC } from "react";

interface props {
  name: string;
  age?: number;
  isLoggedIn: boolean;
}

// export const Greet = ({ name }: props) => {

export const Greet: FC<props> = ({ name, age = 11, isLoggedIn }) => {
  return (
    <div>
      <h1>
        {" "}
        Hello Greet {name} -{age} -{isLoggedIn}
      </h1>
    </div>
  );
};
