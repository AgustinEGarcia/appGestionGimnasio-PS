import userServices from "../services/user_services.js";

function getHorarios(){
    return ["5", "6h", "7", "8", "9", "13", "14", "15", "16", 
    "17","18", "19", "20"]
}

//mostrar todos los alumnos

export const getAllStudentsController = async (req, res) => {
    try {
        const students = await userServices.getAllStudents()
        res.json(students)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//traer un solo alumno

export const getStudentController = async (req, res) => {
    try {
        const student = await userServices.getStudentByID(req.params.id)
        res.json(student[0])
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//crear un alumno

export const createStudentController = async (req, res) => {
    try {
       await userServices.createStudent(req)
       res.json({
           message:"Alumno creado correctamente"
       })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//actualizar un alumno

export const updateStudentController = async (req, res) => {
    try {
        await userServices.updateStudent(req)
        res.json({
            message:"Datos del alumno actualizados correctamente"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Eliminar un alumno

export const deleteStudentController = async (req, res) => {
    try {
        await userServices.deleteStudent(req)
        res.json({
            message:"Alumno eliminado correctamente"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//obtener los horarios disponibles para asignar un turno a un alumno

export async function getHorariosDisponibles(){
    const horarios = getHorarios() //obtengo los horarios de trabajo del gimnasio
    const students = await userServices.getAllStudents() //obtengo todos los alumnos

    console.log(students)

    /*
    comparo los horarios disponibles con los horarios que tienen asignado alumnos, para devolver
    los que estan libres
    */

    return horarios.filter( 
        (horario => !students.find(student => student.Turno_asignado?.toString() === horario)))
}

// controlador de prueba del funcionamiento de la funcion getHorariosDisponibles()
export const verHorariosDispController = async (req, res) => {
    try {
        const horarios = await getHorariosDisponibles()
        res.json(horarios)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

