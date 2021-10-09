import { createTask } from './create_task'
import { TaskDatabaseRepository } from '../interface/task_database_repository'

export const taskCases = ({ database }: { database: TaskDatabaseRepository }) => ({
  createTask: createTask(database)
})