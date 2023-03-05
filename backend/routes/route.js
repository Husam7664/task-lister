import express from 'express'
import { addTask, getTasks, getTask } from '../controller/task-controller.js'

const router = express.Router()

router.post('/add-task', addTask)
router.get('/all-tasks', getTasks)
router.get('/:id', getTask)

export default router
