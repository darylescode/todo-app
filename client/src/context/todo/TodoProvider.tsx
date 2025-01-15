import { useState } from "react";
import { TodoContext } from "./TodoContext";
import { ITodo } from "@/types/todo";
import { todoData } from "@/shared/constants/data/todoData";

function TodoProvider({ children }: React.PropsWithChildren) {
  const [todo, setTodo] = useState<ITodo[]>([...todoData]);
  const [selectedTodo, setSelectedTodo] = useState<ITodo | null>(null);

  return (
    <TodoContext.Provider
      value={{ todo, setTodo, selectedTodo, setSelectedTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
