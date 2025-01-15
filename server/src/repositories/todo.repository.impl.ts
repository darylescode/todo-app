import { Kysely, Selectable } from "kysely";
import { DB, Todo } from "@definitions/db/schema.type";
import { NewTodo, UpdateTodo } from "@definitions/db/table.type";

import ITodoRepository from "../types/repositories/todo.repository";

class TodoRepositoryImpl implements ITodoRepository {
  private database: Kysely<DB>;

  constructor(database: Kysely<DB>) {
    this.database = database;
  }

  public create = async (entity: NewTodo): Promise<void> => {
    await this.database.insertInto("todo").values(entity).execute();
  };

  public update = async (id: string, entity: UpdateTodo): Promise<void> => {
    await this.database
      .updateTable("todo")
      .set(entity)
      .where("uuid", "=", id)
      .execute();
  };

  public delete = async (id: string): Promise<void> => {
    await this.database.deleteFrom("todo").where("uuid", "=", id).execute();
  };

  public findById = async (id: string): Promise<Selectable<Todo> | null> => {
    const result = await this.database
      .selectFrom("todo")
      .selectAll()
      .where("uuid", "=", id)
      .executeTakeFirst();
    return result || null;
  };
}

export default TodoRepositoryImpl;
