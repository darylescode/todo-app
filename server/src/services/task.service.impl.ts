import { NewTask, SelectTask, UpdateTask } from "@definitions/db/table.type";

import ITaskRepository from "@definitions/repositories/task.repository";
import ITaskService from "@definitions/services/task.service";

class TaskServiceImpl implements ITaskService {
  private repository: ITaskRepository;

  constructor(repository: ITaskRepository) {
    this.repository = repository;
  }

  public create = async (entity: NewTask): Promise<string> => {
    await this.repository.create(entity);
    return "Created successfully";
  };

  public update = async (id: string, entity: UpdateTask): Promise<string> => {
    await this.repository.update(id, entity);
    return "Updated successfully";
  };

  public delete = async (id: string): Promise<string> => {
    await this.repository.delete(id);
    return "Deleted successfully";
  };

  public findById = async (id: string): Promise<SelectTask | null> => {
    const result = await this.repository.findById(id);
    return result;
  };

  public findAllById = async (todoId: string): Promise<SelectTask[]> => {
    return await this.repository.findAllById(todoId);
  };
}

export default TaskServiceImpl;
