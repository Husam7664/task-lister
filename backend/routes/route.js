import express, { Router } from 'express'
import { addTask } from '../controller/task-controller.js'

const router = express.Router()

router.post('/add-task', addTask)

export default router
