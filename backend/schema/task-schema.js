import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date,
  completionStatus: Boolean,
})

autoIncrement.initialize(mongoose.connection)
// taskSchema.plugin(autoIncrement.plugin, 'task')

const Task = mongoose.model('task', taskSchema)

export default Task
