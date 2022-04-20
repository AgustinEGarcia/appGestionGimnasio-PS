import AppModel from "../models/appModel.js";

//mostrar todos los alumnos

export const getAllStudents = async (req, res) => {
    try {
        const students = await AppModel.findAll()
        res.json(students)
    } catch (error) {
        res.json({message: error.message})
    }
}

//traer un solo alumno

export const getStudent = async (req, res) => {
    try {
        const student = await AppModel.findAll({
            where:{id: req.params.id}
        })
        res.json(student[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

//crear un alumno

export const createStudent = async (req, res) => {
    try {
       await AppModel.create(req.body)
       res.json({
           message:"Alumno creado correctamente"
       })
    } catch (error) {
        res.json({message: error.message})
    }
}

//actualizar un alumno

export const updateStudent = async (req, res) => {
    try {
        await AppModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            message:"Datos del alumno actualizados correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Eliminar un alumno

export const deleteStudent = async (req, res) => {
    try {
        await AppModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            message:"Alumno eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}