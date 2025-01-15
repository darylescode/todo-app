import { Todo } from "@definitions/db/schema.type";
import { SelectTodo } from "@definitions/db/table.type";
import { IBaseRepository } from "./base.repository";

interface ITodoRepository extends IBaseRepository<Todo, string> {
  findAll: () => Promise<SelectTodo[]>
}

export default ITodoRepository;
