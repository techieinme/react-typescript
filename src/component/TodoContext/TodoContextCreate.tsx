import React, { createContext, useState } from "react";
import { ITodo } from "./TodoContext.interace";

interface ITodoContextType {
  todo: ITodo | null;
  setTodo: React.Dispatch<React.SetStateAction<ITodo | null>>;
}
export const TodoContext = createContext<ITodoContextType | null>(null);

interface ITodoContextProviderType {
  children?: React.ReactNode;
}
export const TodoContextProvider = ({ children }: ITodoContextProviderType) => {
  const [todo, setTodo] = useState<ITodo | null>(null);

  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
