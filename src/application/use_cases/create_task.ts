import { Task, taskValidation } from '../../entities/task'
import { domainErros } from '../errors/domain_errors'
import { TaskDatabaseRepository } from '../interface/task_database_repository'

export const createTask = (database: TaskDatabaseRepository) => async (task: Task): Promise<Task> => {
  const { value, error } = taskValidation(task)

  if (error) throw domainErros(error)

  return await database.persist(value)
}
