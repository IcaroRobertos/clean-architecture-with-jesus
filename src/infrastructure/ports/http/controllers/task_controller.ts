import { taskCases } from '../../../../application/use_cases/__task_cases__'
import { taskRepository } from '../../../repositories/mongodb/task_repository'

const { createTask } = taskCases({
  database: taskRepository
})

export const taskController = {
  create: createTask
}