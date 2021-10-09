import { Task } from '../../entities/task'

export interface TaskDatabaseRepository {
  persist: (_task: Task) => Promise<Task>
  // update: (_id: string, _task: Task) => Promise<Task>
  // find: (_id: string) => Promise<Task>
  // delete: (_id: string) => Promise<void>
}