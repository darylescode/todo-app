import { useState } from "react";
import { TodoContext } from "./TodoContext";
import { ITodo } from "@/types/todo";

function TodoProvider({ children }: React.PropsWithChildren) {
  const [todo, setTodo] = useState<ITodo[]>([]);

  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
