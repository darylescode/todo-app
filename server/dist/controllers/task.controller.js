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
class TaskController {
    constructor(service) {
        this.createTask = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const taskObj = req.body;
            const message = yield this.service.create(taskObj);
            res.status(200).send({ message });
        });
        this.updateTask = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
            const taskObj = req.body;
            const message = yield this.service.update(id, taskObj);
            res.status(200).send({ message });
        });
        this.deleteTask = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
            const message = yield this.service.delete(id);
            res.status(200).send({ message });
        });
        this.findTaskById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
            const data = yield this.service.findById(id);
            res.status(200).send({ data });
        });
        this.findTaskByTodoId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const todoId = (_a = req.params) === null || _a === void 0 ? void 0 : _a.todoId;
            const data = yield this.service.findAllById(todoId);
            res.status(200).send({ list: data });
        });
        this.service = service;
    }
}
exports.default = TaskController;
//# sourceMappingURL=task.controller.js.map