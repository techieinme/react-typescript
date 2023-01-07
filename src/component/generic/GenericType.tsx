import React from "react";

interface ListProps<T> {
  items: T[];
  click: (value: T) => void;
}
const GenericType = <T extends {}>({ items, click }: ListProps<T>) => {
  return <div>GenericType</div>;
};
export default GenericType;
