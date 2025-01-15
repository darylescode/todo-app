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
class TaskServiceImpl {
    constructor(repository) {
        this.create = (entity) => __awaiter(this, void 0, void 0, function* () {
            yield this.repository.create(entity);
            return "Created successfully";
        });
        this.update = (id, entity) => __awaiter(this, void 0, void 0, function* () {
            yield this.repository.update(id, entity);
            return "Updated successfully";
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(id);
            return "Deleted successfully";
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.repository.findById(id);
            return result;
        });
        this.findAllById = (todoId) => __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findAllById(todoId);
        });
        this.repository = repository;
    }
}
exports.default = TaskServiceImpl;
//# sourceMappingURL=task.service.impl.js.map