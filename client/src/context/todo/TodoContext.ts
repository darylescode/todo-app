import { createContext } from "react";
import { ITodoContext } from "@/types/todo";

export const TodoContext = createContext<ITodoContext>({
  todo: [],
  setTodo: () => {},
  selectedTodo: null,
  setSelectedTodo: () => {}
});
