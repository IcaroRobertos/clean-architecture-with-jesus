import { Task } from '../../entities/task'

export const toTask = (params: any): Task => ({
  id: params.id,
  name: params.name,
  date: params.date,
  description: params.description,
  status: params.status
})