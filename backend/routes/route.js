import express from 'express'
import {
  addTask,
  getTasks,
  getTask,
  editTask,
} from '../controller/task-controller.js'

const router = express.Router()

router.post('/add-task', addTask)
router.get('/all-tasks', getTasks)
router.get('/:id', getTask)
router.post('/:id', editTask)

export default router
