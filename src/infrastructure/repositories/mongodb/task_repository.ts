import { TaskDatabaseRepository } from '../../../application/interface/task_database_repository'
import { Task } from '../../gateways/mongodb/models/task'
import { toTask } from '../../adapters/to_entity'

export const taskRepository: TaskDatabaseRepository = {
  persist: async (task) => {
    const newTask = new Task(task)

    await newTask.save()

    return toTask(newTask);
  }
}