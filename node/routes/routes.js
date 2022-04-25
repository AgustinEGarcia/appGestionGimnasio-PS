import express from 'express'
import { createStudentController, getAllStudentsController, getStudentController, updateStudentController, deleteStudentController, verHorariosDisp } from '../controllers/appController.js'

const router = express.Router()

router.get('/horariosDisponibles', verHorariosDisp)
router.get('/', getAllStudentsController)
router.get('/:id', getStudentController)
router.post('/', createStudentController)
router.put('/:id', updateStudentController)
router.delete('/:id', deleteStudentController)


export default router