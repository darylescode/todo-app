"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
const kysely_1 = require("kysely");
function up(db) {
    return __awaiter(this, void 0, void 0, function* () {
        yield db.schema
            .createTable("todo")
            .ifNotExists()
            .addColumn("uuid", "char(36)", (col) => col.notNull().unique())
            .addColumn("title", "text", (col) => col.notNull())
            .addColumn("position", "integer", (col) => col.notNull())
            .addColumn("created_at", "timestamp")
            .addColumn("updated_at", "timestamp")
            .execute()
            .then(() => console.log("todo table created"));
        yield db.schema
            .createTable("task")
            .ifNotExists()
            .addColumn("uuid", "char(36)", (col) => col.notNull().unique())
            .addColumn("todo_uuid", "char(36)", (col) => col.notNull())
            .addColumn("position", "integer", (col) => col.notNull())
            .addColumn("text", "text", (col) => col.notNull())
            .addColumn("status", "boolean", (col) => col.notNull())
            .addColumn("created_at", "timestamp")
            .addColumn("updated_at", "timestamp")
            .addForeignKeyConstraint("fk_todo_uuid", ["todo_uuid"], "todo", ["uuid"], (cb) => cb.onDelete("cascade"))
            .execute()
            .then(() => console.log("task table created"));
        yield (0, kysely_1.sql) `DROP FUNCTION IF EXISTS UUID_V4;`.execute(db);
        // create a custom UUID version 4 function
        yield (0, kysely_1.sql) `
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
        ["todo", "task"].map((table) => __awaiter(this, void 0, void 0, function* () {
            return yield (0, kysely_1.sql) `DROP TRIGGER IF EXISTS before_insert_${kysely_1.sql.raw(table)}; CREATE TRIGGER before_insert_${kysely_1.sql.raw(table)} BEFORE INSERT ON ${kysely_1.sql.raw(table)} FOR EACH ROW BEGIN IF NEW.uuid IS NULL THEN SET NEW.uuid = UUID_TO_BIN(UUID_V4()); END IF; END;`.execute(db);
        }));
    });
}
function down(db) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, kysely_1.sql) `DROP FUNCTION IF EXISTS UUID_V4`.execute(db);
        ["todo", "task"].map((table) => __awaiter(this, void 0, void 0, function* () {
            return yield (0, kysely_1.sql) `DROP TRIGGER IF EXISTS before_insert_${kysely_1.sql.raw(table)}`.execute(db);
        }));
        yield (0, kysely_1.sql) `SET FOREIGN_KEY_CHECKS = 0`.execute(db);
        yield db.schema
            .dropTable("todo")
            .ifExists()
            .execute()
            .then(() => console.log("Todo table dropped"));
        yield db.schema
            .dropTable("task")
            .ifExists()
            .execute()
            .then(() => console.log("Task table dropped"));
        yield (0, kysely_1.sql) `SET FOREIGN_KEY_CHECKS = 1`.execute(db);
    });
}
//# sourceMappingURL=20250115T040358-initial.migration.js.map