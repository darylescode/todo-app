import ITaskService from "@definitions/services/task.service";
import { Request, Response } from "express";

class TaskController {
  private service: ITaskService;

  constructor(service: ITaskService) {
    this.service = service;
  }

  public createTask = async (req: Request, res: Response): Promise<void> => {
    const taskObj = req.body;
    const message = await this.service.create(taskObj);
    res.status(200).send({ message });
  };

  public updateTask = async (req: Request, res: Response): Promise<void> => {
    const id = req.params?.id;
    const taskObj = req.body;
    const message = await this.service.update(id, taskObj);
    res.status(200).send({ message });
  };

  public deleteTask = async (req: Request, res: Response): Promise<void> => {
    const id = req.params?.id;
    const message = await this.service.delete(id);
    res.status(200).send({ message });
  };

  public findTaskById = async (req: Request, res: Response): Promise<void> => {
    const id = req.params?.id;
    const data = await this.service.findById(id);
    res.status(200).send({ data });
  };

  public findTaskByTodoId = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const todoId = req.params?.todoId;
    const data = await this.service.findAllById(todoId);
    res.status(200).send({ list: data });
  };
}

export default TaskController;
