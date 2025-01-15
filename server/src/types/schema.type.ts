import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface DB {
  todo: ITodo;
  task: ITask;
}

export interface ITodo {
  uuid: Generated<string>;
  title: string;
  position: number;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface ITask {
  uuid: Generated<string>;
  todo_uuid: string;
  text: string;
  status: boolean;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}
