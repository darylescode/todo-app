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
class TaskRepositoryImpl {
    constructor(database) {
        this.create = (task) => __awaiter(this, void 0, void 0, function* () {
            yield this.database.insertInto("task").values(task).execute();
        });
        this.update = (id, entity) => __awaiter(this, void 0, void 0, function* () {
            yield this.database
                .updateTable("task")
                .set(entity)
                .where("uuid", "=", id)
                .executeTakeFirst();
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            yield this.database.deleteFrom("task").where("uuid", "=", id).execute();
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.database
                .selectFrom("task")
                .selectAll()
                .where("uuid", "=", id)
                .executeTakeFirst();
            return result !== null && result !== void 0 ? result : null;
        });
        this.findAllById = (todoId) => __awaiter(this, void 0, void 0, function* () {
            return yield this.database
                .selectFrom("task")
                .selectAll("task")
                .where("uuid", "=", todoId)
                .execute();
        });
        this.database = database;
    }
}
exports.default = TaskRepositoryImpl;
//# sourceMappingURL=task.repository.impl.js.map