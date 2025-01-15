import { Insertable, Updateable, Selectable } from "kysely";

export interface IBaseRepository<T, ID> {
  create: (entity: Insertable<T>) => Promise<void>;
  update: (id: ID, entity: Updateable<T>) => Promise<void>;
  delete: (id: ID) => Promise<void>;
  findById: (id: ID) => Promise<Selectable<T> | null>;
}
