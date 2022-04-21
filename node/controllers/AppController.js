import userServices from "../services/user_services.js";

function getHorarios(){
    return ["05", "06", "07", "08", "09", "13", "14", "15", "16", 
    "17","18", "19", "20"]
}

//mostrar todos los alumnos

export const getAllStudentsController = async (req, res) => {
    try {
        const students = await userServices.getAllStudents()
        res.json(students)
    } catch (error) {
        res.json({message: error.message})
    }
}

//traer un solo alumno

export const getStudent = async (req, res) => {
    try {
        const student = await userServices.getStudentByID(req.params.id)
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

export async function getHorariosDisponibles(){
    const horarios = getHorarios()
    const students = await userServices.getAllStudents()

    return horarios.filter( 
        ( horario => !students.find( students => students.Turno_asignado === horario ) ) )
}

export const verHorariosDisp = async (req, res) => {
    try {
        console.log("hola")
        await res.json(getHorariosDisponibles())
    } catch (error) {
        res.json({message: error.message})
    }
}

