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
    response.status(200).json(tasks)
  } catch (error) {
    response.status(400).json({ message: error.message })
  }
}
export const getTask = async (request, response) => {
  console.log('id', request.params.id)
  try {
    // const tasks = await Task.find({ _id: request.params.id })
    const tasks = await Task.findById(request.params.id)
    response.status(200).json(tasks)
  } catch (error) {
    response.status(400).json({ message: error.message })
  }
}
