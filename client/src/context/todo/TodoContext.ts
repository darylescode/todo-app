import { createContext } from "react";
import { ITodoContext } from "@/types/todo";
import { todoData } from "@/shared/constants/data/todoData";

export const TodoContext = createContext<ITodoContext>({
  todo: [...todoData],
  setTodo: () => {},
});
