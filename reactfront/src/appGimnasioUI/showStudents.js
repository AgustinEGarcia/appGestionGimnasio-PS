import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

//constante para hacer referencia a nuestro endpoint
const URI = "http://localhost:8000/students/";

//componente funcional
const CompShowStudents = () => {
  const [students, setStudent] = useState([]);
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    getStudents();
  }, []);

  //procedimiento para mostrar todos los estudiantes
  const getStudents = async () => {
    const res = await axios.get(URI);
    setStudent(res.data);
  };

  //procedimiento para eliminar un estudiante
  const deleteStudent = async (id) => {
    await axios.delete(`${URI}${id}`);
    getStudents();
    cerrarModal();
  };

  const abrirModal = () => setMostrar(true);

  const cerrarModal = () => setMostrar(false);

  return (
    <div className="div_padre">
      <div className="row">
        <div className="col">
          <table className="table">
            <thead className="cabecera-grilla">
              <tr className="columnas_grilla">
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
                <th>Fecha de Nacimiento</th>
                <th>Nro. de teléfono</th>
                <th>Tipo de membresía</th>
                <th>Turno asignado</th>
                <th>Estado de membresía</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody className="filas_alumnos">
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.Nombre}</td>
                  <td>{student.Apellido}</td>
                  <td>{student.DNI}</td>
                  <td>{student.Fecha_nacimiento}</td>
                  <td>{student.Nro_telefono}</td>
                  <td>{student.Tipo_membresia}</td>
                  <td>{student.Turno_asignado}</td>
                  <td>{student.Estado_membresia}</td>
                  <td>
                    <Link
                      to={`/edit/${student.id}`}
                      className="btn btn-info boton_editar_alumno"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={abrirModal}
                      className="btn btn-danger boton_nuevo_alumno"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                    <Modal isOpen={mostrar} className="modal_estilo" >
                      <ModalHeader className="modal_header_footer" >
                        ¿Estás seguro que quieres eliminar este alumno?
                      </ModalHeader>
                      <ModalFooter className="modal_header_footer" >
                        <Button className="boton_estilo" onClick={ () => deleteStudent(student.id)} >Eliminar</Button>
                        <Button className="boton_estilo" onClick={cerrarModal} >Cancelar</Button>
                      </ModalFooter>
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowStudents;
