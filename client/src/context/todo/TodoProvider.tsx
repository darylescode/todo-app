import { useState } from "react";
import { TodoContext } from "./TodoContext";
import { ITodo } from "@/types/todo";
import { todoData } from "@/shared/constants/data/todoData";

function TodoProvider({ children }: React.PropsWithChildren) {
  const [todo, setTodo] = useState<ITodo[]>([...todoData]);

  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
