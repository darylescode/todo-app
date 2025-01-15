import { Selectable, Insertable, Updateable } from "kysely";

export interface IBaseService<T, ID> {
  create: (entity: Insertable<T>) => Promise<string>;
  update: (id: ID, entity: Updateable<T>) => Promise<string>;
  delete: (id: ID) => Promise<string>;
  findById: (id: ID) => Promise<Selectable<T> | null>;
}
