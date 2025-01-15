import { Selectable } from "kysely";
import { Task } from "@definitions/db/schema.type";
import { IBaseRepository } from "./base.repository";

interface ITaskRepository extends IBaseRepository<Task, string> {
  findAllById: (todoId: string) => Promise<Selectable<Task>[]>;
}

export default ITaskRepository;
