import AppModel from "../models/AppModel.js";

async function getAllStudents() {
  return await AppModel.findAll();
}

async function getStudentByID(id) {
  return await AppModel.findAll({
    where: { id },
  });
}

async function createStudent(req) {
  return await AppModel.create(req.body);
}

async function updateStudent(req) {
  return await AppModel.update(
    { ...req.body, Turno_asignado: req.body.Turno_asignado || null },
    {
      where: { id: req.params.id },
    }
  );
}

async function deleteStudent(req) {
  return await AppModel.destroy({
    where: { id: req.params.id },
  });
}

export default {
  getAllStudents,
  getStudentByID,
  createStudent,
  updateStudent,
  deleteStudent,
};
