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
class TodoRepositoryImpl {
    constructor(database) {
        this.create = (entity) => __awaiter(this, void 0, void 0, function* () {
            yield this.database.insertInto("todo").values(entity).execute();
        });
        this.update = (id, entity) => __awaiter(this, void 0, void 0, function* () {
            yield this.database
                .updateTable("todo")
                .set(entity)
                .where("uuid", "=", id)
                .execute();
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            yield this.database.deleteFrom("todo").where("uuid", "=", id).execute();
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.database
                .selectFrom("todo")
                .selectAll()
                .where("uuid", "=", id)
                .executeTakeFirst();
            return result || null;
        });
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.database.selectFrom("todo").selectAll().execute();
        });
        this.database = database;
    }
}
exports.default = TodoRepositoryImpl;
//# sourceMappingURL=todo.repository.impl.js.map