import express from "express";
import db from "src/database/db.database";
import TodoController from "@controllers/todo.controller";
import TodoServiceImpl from "@services/todo.service.impl";
import TodoRepositoryImpl from "./../repositories/todo.repository.impl";
import AsyncWrapper from "@utils/async-wrapper";

const router = express.Router();
const wrapper = new AsyncWrapper();

const repository = new TodoRepositoryImpl(db);

const service = new TodoServiceImpl(repository);

const controller: TodoController = new TodoController(service);

router.route("/:id").get(wrapper.asyncErrorHandler(controller.findTodoById));

router.route("/").get(wrapper.asyncErrorHandler(controller.findAllTodo));

router.route("/").post(wrapper.asyncErrorHandler(controller.createTodo));

router.route("/:id").put(wrapper.asyncErrorHandler(controller.updateTodo));

router.route("/:id").delete(wrapper.asyncErrorHandler(controller.deleteTodo));

export default router;
