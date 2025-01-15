import { Request, Response } from "express";
import ITodoService from "@definitions/services/todo.service";

class TodoController {
  private service: ITodoService;

  constructor(service: ITodoService) {
    this.service = service;
  }

  public createTodo = async (req: Request, res: Response): Promise<void> => {
    const todoObj = req.body;
    const message = await this.service.create(todoObj);
    res.status(200).send({ message });
  };

  public updateTodo = async (req: Request, res: Response): Promise<void> => {
    const id = req.params?.id;
    const todoObj = req.body;
    const message = await this.service.update(id, todoObj);
    res.status(200).send({ message });
  };

  public deleteTodo = async (req: Request, res: Response): Promise<void> => {
    const id = req.params?.id;
    const message = await this.service.delete(id);
    res.status(200).send({ message });
  };

  public findTodoById = async (req: Request, res: Response): Promise<void> => {
    const id = req.params?.id;
    const data = await this.service.findById(id);
    res.status(200).send({ data });
  };

  public findAllTodo = async (req: Request, res: Response): Promise<void> => {
    const id = req.params?.id;
    const data = await this.service.findAll();
    res.status(200).send({ list: data });
  };
}

export default TodoController;
