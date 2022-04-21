import AppModel from "../models/appModel.js";

async function getAllStudents () {
    return await AppModel.findAll()
}

async function getStudentByID(id){
    return await AppModel.findAll({
        where:{id}
    })
}

export default {getAllStudents, getStudentByID}