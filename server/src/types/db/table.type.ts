import { Task, Todo } from "./schema.type";
import { Insertable, Selectable, Updateable } from "kysely";

export type SelectTodo = Selectable<Todo>;
export type NewTodo = Insertable<Todo>;
export type UpdateTodo = Updateable<Todo>;

export type SelectTask = Selectable<Task>;
export type NewTask = Insertable<Task>;
export type UpdateTask = Updateable<Task>;
