import express from "express";
import db from "src/database/db.database";
import TaskController from "@controllers/task.controller";
import TaskServiceImpl from "@services/task.service.impl";
import TaskRepositoryImpl from "./../repositories/task.repository.impl";
import AsyncWrapper from "@utils/async-wrapper";

const router = express.Router();
const wrapper = new AsyncWrapper();

const repository = new TaskRepositoryImpl(db);

const service = new TaskServiceImpl(repository);

const controller: TaskController = new TaskController(service);

router.route("/:id").get(wrapper.asyncErrorHandler(controller.findTaskById));

router.route("/:todoId").get(wrapper.asyncErrorHandler(controller.findTaskByTodoId));

router.route("/").post(wrapper.asyncErrorHandler(controller.createTask));

router.route("/:id").put(wrapper.asyncErrorHandler(controller.updateTask));

router.route("/:id").delete(wrapper.asyncErrorHandler(controller.deleteTask));

export default router;
