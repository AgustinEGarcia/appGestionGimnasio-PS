import express from 'express'
import { createStudent, deleteStudent, getAllStudentsController, getStudent, updateStudent, verHorariosDisp } from '../controllers/appController.js'
const router = express.Router()

router.get('/', getAllStudentsController)
router.get('/:id', getStudent)
router.post('/', createStudent)
router.put('/:id', updateStudent)
router.delete('/:id', deleteStudent)
router.get('/horariosDisponibles', verHorariosDisp)

export default router