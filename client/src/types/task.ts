export interface ITask {
  uuid: string;
  todoUuid: string;
  position: number;
  status: number;
  text: string;
  created_at: Date | null;
  updated_at: Date | null;
}
