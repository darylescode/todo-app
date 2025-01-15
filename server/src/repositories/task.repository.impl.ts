import { Kysely } from "kysely";
import { DB } from "@definitions/db/schema.type";
import { NewTask, SelectTask, UpdateTask } from "@definitions/db/table.type";

import ITaskRepository from "../types/repositories/task.repository";

class TaskRepositoryImpl implements ITaskRepository {
  private database: Kysely<DB>;

  constructor(database: Kysely<DB>) {
    this.database = database;
  }

  public create = async (task: NewTask): Promise<void> => {
    await this.database.insertInto("task").values(task).execute();
  };

  public update = async (id: string, entity: UpdateTask): Promise<void> => {
    await this.database
      .updateTable("task")
      .set(entity)
      .where("uuid", "=", id)
      .executeTakeFirst();
  };

  public delete = async (id: string): Promise<void> => {
    await this.database.deleteFrom("task").where("uuid", "=", id).execute();
  };

  public findById = async (id: string): Promise<SelectTask | null> => {
    const result = await this.database
      .selectFrom("task")
      .selectAll()
      .where("uuid", "=", id)
      .executeTakeFirst();

    return result ?? null;
  };

  public findAllById = async (todoId: string): Promise<SelectTask[]> => {
    return await this.database
      .selectFrom("task")
      .selectAll("task")
      .where("uuid", "=", todoId)
      .execute();
  };
}

export default TaskRepositoryImpl;
