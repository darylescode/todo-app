import { Todo } from "@definitions/db/schema.type";
import { IBaseRepository } from "./base.repository";

interface ITodoRepository extends IBaseRepository<Todo, string> {}

export default ITodoRepository;
