import { sql, type Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("todo")
    .ifNotExists()
    .addColumn("uuid", "char(36)", (col) => col.notNull().unique())
    .addColumn("title", "text", (col) => col.notNull())
    .addColumn("position", "integer", (col) => col.notNull())
    .addColumn("created_at", "timestamp")
    .addColumn("updated_at", "timestamp")
    .execute()
    .then(() => console.log("todo table created"));

  await db.schema
    .createTable("task")
    .ifNotExists()
    .addColumn("uuid", "char(36)", (col) => col.notNull().unique())
    .addColumn("todo_uuid", "char(36)", (col) => col.notNull())
    .addColumn("position", "integer", (col) => col.notNull())
    .addColumn("text", "text", (col) => col.notNull())
    .addColumn("status", "boolean", (col) => col.notNull())
    .addColumn("created_at", "timestamp")
    .addColumn("updated_at", "timestamp")
    .addForeignKeyConstraint(
      "fk_todo_uuid",
      ["todo_uuid"],
      "todo",
      ["uuid"],
      (cb) => cb.onDelete("cascade")
    )
    .execute()
    .then(() => console.log("task table created"));

  await sql`DROP FUNCTION IF EXISTS UUID_V4;`.execute(db);

  // create a custom UUID version 4 function
  await sql`
  DROP FUNCTION IF EXISTS UUID_V4;
  CREATE FUNCTION UUID_V4()
    RETURNS CHAR(36)
    READS SQL DATA
  BEGIN
    RETURN LOWER(
      CONCAT(
        HEX(RANDOM_BYTES(4)), '-',
        HEX(RANDOM_BYTES(2)), '-4',
        SUBSTR(HEX(RANDOM_BYTES(2)), 2, 3), '-',
        HEX(FLOOR(ASCII(RANDOM_BYTES(1)) / 64) + 8),
        SUBSTR(HEX(RANDOM_BYTES(2)), 2, 3), '-',
        HEX(RANDOM_BYTES(6))
      )
    );
  END;
`.execute(db);

  // create a trigger for each table
  ["todo", "task"].map(
    async (table) =>
      await sql`DROP TRIGGER IF EXISTS before_insert_${sql.raw(
        table
      )}; CREATE TRIGGER before_insert_${sql.raw(
        table
      )} BEFORE INSERT ON ${sql.raw(
        table
      )} FOR EACH ROW BEGIN IF NEW.uuid IS NULL THEN SET NEW.uuid = UUID_TO_BIN(UUID_V4()); END IF; END;`.execute(
        db
      )
  );
}

export async function down(db: Kysely<any>): Promise<void> {
  await sql`DROP FUNCTION IF EXISTS UUID_V4`.execute(db);

  ["todo", "task"].map(
    async (table) =>
      await sql`DROP TRIGGER IF EXISTS before_insert_${sql.raw(table)}`.execute(
        db
      )
  );

  await sql`SET FOREIGN_KEY_CHECKS = 0`.execute(db);

  await db.schema
    .dropTable("todo")
    .ifExists()
    .execute()
    .then(() => console.log("Todo table dropped"));

  await db.schema
    .dropTable("task")
    .ifExists()
    .execute()
    .then(() => console.log("Task table dropped"));

  await sql`SET FOREIGN_KEY_CHECKS = 1`.execute(db);
}
