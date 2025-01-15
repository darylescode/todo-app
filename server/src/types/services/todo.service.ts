import { Todo } from "@definitions/db/schema.type";
import { IBaseService } from "./base.service";

interface ITodoService extends IBaseService<Todo, string> {}

export default ITodoService;
