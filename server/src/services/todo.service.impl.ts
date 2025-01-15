import { NewTodo, SelectTodo, UpdateTodo } from "@definitions/db/table.type";
import ITodoRepository from "@definitions/repositories/todo.repository";
import ITodoService from "@definitions/services/todo.service";

class TodoServiceImpl implements ITodoService {
  private repository: ITodoRepository;

  constructor(repository: ITodoRepository) {
    this.repository = repository;
  }

  public create = async (entity: NewTodo): Promise<string> => {
    await this.repository.create(entity);
    return "Created successfully";
  };

  public update = async (id: string, entity: UpdateTodo): Promise<string> => {
    await this.repository.update(id, entity);
    return "Updated successfully";
  };

  public delete = async (id: string): Promise<string> => {
    await this.repository.delete(id);
    return "Deleted successfully";
  };

  public findById = async (id: string): Promise<SelectTodo | null> => {
    const result = await this.repository.findById(id);
    return result;
  };
}

export default TodoServiceImpl;
