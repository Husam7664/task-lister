import express, { Router } from 'express'
import { addTask, getTasks } from '../controller/task-controller.js'

const router = express.Router()

router.post('/add-task', addTask)
router.get('/all-tasks', getTasks)

export default router
