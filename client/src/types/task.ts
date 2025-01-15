export interface ITask {
  uuid: string;
  todoUuid: string;
  position: number;
  status: boolean;
  text: string;
  created_at: Date | null;
  updated_at: Date | null;
}
