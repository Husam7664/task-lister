import Task from '../schema/task-schema.js'

export const addTask = async (request, response) => {
  const task = request.body

  const newTask = new Task(task)
  console.log(task)

  try {
    await newTask.save()
    response.status(201).json(newTask)
  } catch (error) {
    response.status(409).json({ message: error.message })
  }
}

export const getTasks = async (request, response) => {
  try {
    const tasks = await Task.find()
    console.log(Task)
    response.status(200).json(tasks)
  } catch (error) {
    response.status(400).json({ message: error.message })
  }
}
