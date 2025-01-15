import { Todo } from "@definitions/db/schema.type";
import { SelectTodo } from "@definitions/db/table.type";
import { IBaseService } from "./base.service";

interface ITodoService extends IBaseService<Todo, string> {
  findAll: () => Promise<SelectTodo[]>
}

export default ITodoService;
