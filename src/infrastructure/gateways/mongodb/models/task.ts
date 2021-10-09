import { Schema, model } from 'mongoose'

const taskSchema = new Schema({}, { strict: false })

export const Task = model("tasks", taskSchema)