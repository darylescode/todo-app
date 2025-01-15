"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_database_1 = __importDefault(require("src/database/db.database"));
const todo_controller_1 = __importDefault(require("../controllers/todo.controller"));
const todo_service_impl_1 = __importDefault(require("../services/todo.service.impl"));
const todo_repository_impl_1 = __importDefault(require("./../repositories/todo.repository.impl"));
const async_wrapper_1 = __importDefault(require("../utils/async-wrapper"));
const router = express_1.default.Router();
const wrapper = new async_wrapper_1.default();
const repository = new todo_repository_impl_1.default(db_database_1.default);
const service = new todo_service_impl_1.default(repository);
const controller = new todo_controller_1.default(service);
router.route("/:id").get(wrapper.asyncErrorHandler(controller.findTodoById));
router.route("/").get(wrapper.asyncErrorHandler(controller.findAllTodo));
router.route("/").post(wrapper.asyncErrorHandler(controller.createTodo));
router.route("/:id").put(wrapper.asyncErrorHandler(controller.updateTodo));
router.route("/:id").delete(wrapper.asyncErrorHandler(controller.deleteTodo));
exports.default = router;
//# sourceMappingURL=todo.router.js.map