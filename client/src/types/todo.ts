export interface ITodo {
  uuid: string;
  title: string;
  position: number;
  created_at: Date | null;
  updated_at: Date | null;
}

export interface ITodoContext {
  todo: ITodo[];
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
}
