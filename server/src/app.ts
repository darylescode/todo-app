import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

import todoRouter from "./routers/todo.router";
import taskRouter from "./routers/task.router";
import corsOptions from "./config/cors-option";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use("/todo", todoRouter);
app.use("/task", taskRouter);

export default app;
