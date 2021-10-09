import Joi from 'joi'

export interface Task {
  id?: string
  name: string
  date: Date
  description: string
  status: "todo" | "doing" | "done"
}

const taskSchema = Joi.object({
  id: Joi.string().optional(),
  name: Joi.string().required(),
  date: Joi.date().required(),
  description: Joi.string().required(),
  status: Joi.string().required(),
})

export const taskValidation = (task: Task) => taskSchema.validate(task)