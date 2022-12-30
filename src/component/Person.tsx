import { FC } from "react";
import IPerson from "./props";

export const Person: FC<IPerson> = ({ name }) => {
  const { firstName, lastName } = name;

  return (
    <>
      <h1>
        {firstName} - {lastName}
      </h1>
    </>
  );
};
