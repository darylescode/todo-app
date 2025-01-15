"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_database_1 = __importDefault(require("src/database/db.database"));
const task_controller_1 = __importDefault(require("../controllers/task.controller"));
const task_service_impl_1 = __importDefault(require("../services/task.service.impl"));
const task_repository_impl_1 = __importDefault(require("./../repositories/task.repository.impl"));
const async_wrapper_1 = __importDefault(require("../utils/async-wrapper"));
const router = express_1.default.Router();
const wrapper = new async_wrapper_1.default();
const repository = new task_repository_impl_1.default(db_database_1.default);
const service = new task_service_impl_1.default(repository);
const controller = new task_controller_1.default(service);
router.route("/:id").get(wrapper.asyncErrorHandler(controller.findTaskById));
router.route("/:todoId").get(wrapper.asyncErrorHandler(controller.findTaskByTodoId));
router.route("/").post(wrapper.asyncErrorHandler(controller.createTask));
router.route("/:id").put(wrapper.asyncErrorHandler(controller.updateTask));
router.route("/:id").delete(wrapper.asyncErrorHandler(controller.deleteTask));
exports.default = router;
//# sourceMappingURL=task.router.js.map