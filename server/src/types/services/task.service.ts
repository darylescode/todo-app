import { Task } from "@definitions/db/schema.type";
import { IBaseService } from "./base.service";
import { SelectTask } from "@definitions/db/table.type";

interface ITaskService extends IBaseService<Task, string> {
  findAllById: (todoId: string) => Promise<SelectTask[]>;
}

export default ITaskService;
