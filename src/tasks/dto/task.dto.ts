import { TaskStatus } from '../../enums/task-status.enum';

export class TaskDto {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}
