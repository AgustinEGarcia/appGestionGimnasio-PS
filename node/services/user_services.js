import AppModel from "../models/AppModel.js";

async function getAllStudents () {
    return await AppModel.findAll()
}

async function getStudentByID(id){
    return await AppModel.findAll({
        where:{id}
    })
}

export default {getAllStudents, getStudentByID}